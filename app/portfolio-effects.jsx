'use client';

import { useEffect, useRef } from 'react';

export default function PortfolioEffects() {
  const bar = useRef(null);

  useEffect(() => {
    const progress = bar.current;
    const portfolio = progress.nextElementSibling;
    const listeners = new AbortController();
    const { signal } = listeners;
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = 'scaleX(' + window.scrollY / (available || 1) + ')';
    };

    window.addEventListener('scroll', updateProgress, { passive: true, signal });
    updateProgress();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => listeners.abort();
    }

    const revealTargets = portfolio.querySelectorAll(
      '.about>div,.how h3,.steps>div,.projects h3,.feat,.projects .card,footer h3,footer .btn,.stat,.exp h3,.job,.skl h3,.skl>div'
    );
    const revealTimers = new Set();
    const resetReveal = element => {
      element.classList.remove('rv', 'in');
      element.style.transitionDelay = '';
    };
    const revealObserver = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.classList.add('in');
        revealObserver.unobserve(target);
        const timer = window.setTimeout(() => {
          resetReveal(target);
          revealTimers.delete(timer);
        }, 1500);
        revealTimers.add(timer);
      }
    }, { threshold: 0.15 });
    revealTargets.forEach((element, index) => {
      element.classList.add('rv');
      element.style.transitionDelay = (index % 5) * 90 + 'ms';
      revealObserver.observe(element);
    });

    const counters = portfolio.querySelectorAll('[data-to]');
    const frames = new Map();
    const countObserver = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        const total = Number(target.dataset.to);
        const suffix = target.dataset.suf || '';
        const start = performance.now();
        countObserver.unobserve(target);
        const tick = now => {
          const progress = Math.min((now - start) / 1500, 1);
          target.textContent = Math.round(total * (1 - (1 - progress) ** 3)) + suffix;
          if (progress < 1) frames.set(target, requestAnimationFrame(tick));
          else frames.delete(target);
        };
        frames.set(target, requestAnimationFrame(tick));
      }
    }, { threshold: 0.6 });
    counters.forEach(counter => countObserver.observe(counter));

    const hero = portfolio.querySelector('.hero');
    const cards = portfolio.querySelectorAll('.card');
    const clearHero = () => {
      hero.style.setProperty('--px', '0px');
      hero.style.setProperty('--py', '0px');
    };
    hero.addEventListener('pointermove', event => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty('--px', x * -34 + 'px');
      hero.style.setProperty('--py', y * -22 + 'px');
    }, { signal });
    hero.addEventListener('pointerleave', clearHero, { signal });

    cards.forEach(card => {
      card.addEventListener('pointermove', event => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.transform = 'perspective(700px) rotateY(' + x * 10
          + 'deg) rotateX(' + y * -10 + 'deg) translateY(-4px)';
      }, { signal });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      }, { signal });
    });

    return () => {
      listeners.abort();
      revealObserver.disconnect();
      countObserver.disconnect();
      revealTimers.forEach(timer => window.clearTimeout(timer));
      frames.forEach(frame => cancelAnimationFrame(frame));
      revealTargets.forEach(resetReveal);
      counters.forEach(counter => {
        counter.textContent = counter.dataset.to + (counter.dataset.suf || '');
      });
      cards.forEach(card => { card.style.transform = ''; });
      clearHero();
    };
  }, []);

  return <div ref={bar} className="bar" aria-hidden="true" />;
}
