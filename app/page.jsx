import PortfolioEffects from './portfolio-effects';

const linkedinUrl = 'https://www.linkedin.com/in/shanella-cagulang-663076352/';

export default function PortfolioPage() {
  return (
    <>
      <PortfolioEffects />
      <div className="wrap">
        <header className="hero">
          <i className="orb o1"></i><i className="orb o2"></i>
          <div className="photo" role="img" aria-label="Portrait of Shanella Cagulang"></div>
          <nav><span className="logo">Shanella C.</span><a href="#top">Home</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a className="btn" href={linkedinUrl}>Get in touch <i>→</i></a></nav>
          <div className="intro" id="top">
            <p className="hey">Hey, I’m Shanella, a</p>
            <h1><span className="ln"><span>Business</span></span><span className="ln"><span>Analyst</span></span></h1>
          </div>
          <div className="tag">
            <h2>From requirements to production.</h2>
            <p>I led 3 integrated systems that automated 15+ manual processes and cut processing time by 40%.</p>
          </div>
          <div className="skills">
            <div><b><span>#</span>01</b>Requirements Gathering</div>
            <div><b><span>#</span>02</b>Process Improvement</div>
            <div><b><span>#</span>03</b>UAT & Documentation</div>
            <div><b><span>#</span>04</b>Agile Project Delivery</div>
          </div>
        </header>
        <div className="logos">
          <small>Where I’ve worked</small>
          <div className="mq">
            <div className="track">
              <div className="grp"><span><em></em>TOP C Technologies</span><span><em></em>GFMIC Inc.</span><span><em></em>Hapinoy</span><span><em></em>Polytechnic University of the Philippines</span></div>
              <div className="grp" aria-hidden="true"><span><em></em>TOP C Technologies</span><span><em></em>GFMIC Inc.</span><span><em></em>Hapinoy</span><span><em></em>Polytechnic University of the Philippines</span></div>
            </div>
          </div>
        </div>
        <aside className="freelance" aria-labelledby="freelance-title">
          <div>
            <h2 id="freelance-title">Available for freelance work</h2>
            <p>Business analysis, process improvement, and IT project management.</p>
          </div>
          <a className="btn" href="#contact">Discuss your project</a>
        </aside>
        <section className="about" id="about">
          <div>
            <div className="k">Behind the Analysis</div>
            <h3>Turning business needs into clear, workable solutions</h3>
          </div>
          <div>
            <p>I’m an early-career business analyst and IT project manager with hands-on delivery experience across government finance, retail and food service platforms. I hold a BS in Information Technology from PUP (2026).</p>
            <div className="row"><span>Based in the Philippines<br />Open to remote work</span><a className="btn o" href={linkedinUrl}>Get in touch <i>→</i></a></div>
          </div>
        </section>
        <div className="stats">
          <div className="stat"><b data-to="40" data-suf="%">40%</b><span>reduction in overall processing time</span></div>
          <div className="stat"><b data-to="60" data-suf="%">60%</b><span>less data-entry effort</span></div>
          <div className="stat"><b data-to="15" data-suf="+">15+</b><span>manual processes automated</span></div>
          <div className="stat"><b>30→10</b><span>minutes per transaction, serving 50+ users</span></div>
        </div>
        <section className="exp" id="experience">
          <h3>Experience</h3>
          <div className="job">
            <time>Jul 2026 – Present</time>
            <div>
              <h4>Business Analyst</h4>
              <div className="org">TOP C Technologies</div>
              <ul>
                <li>Coordinate with developers and clients to keep Odoo ERP implementations on track.</li>
                <li>Gather client requirements, recommend process improvements, and prepare functional documentation, test cases and user guides.</li>
                <li>Run system testing, UAT and end-user training; support configuration, data migration and integration.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <time>Nov 2026 – Dec 2026</time>
            <div>
              <h4>Freelance Shopify Project Manager</h4>
              <div className="org">Freelance</div>
              <ul>
                <li>Managed delivery of a custom, personalized Shopify store from requirements to delivery.</li>
                <li>Defined scope and timeline with the client, and served as their main point of contact for updates and change requests.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <time>Feb 2025 – Jul 2026</time>
            <div>
              <h4>Project Lead</h4>
              <div className="org">Government Financial Management Innovators Circle (GFMIC Inc.)</div>
              <ul>
                <li>Led 3 integrated systems from requirements through rollout, automating 15+ manual processes and cutting processing time by 40%.</li>
                <li>Cut data-entry effort by 60% and per-transaction handling from 30 to 10 minutes for 50+ users.</li>
                <li>Ran stakeholder requirements sessions and turned findings into functional specifications, workflow redesigns and documentation.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <time>Oct 2025 – May 2026</time>
            <div>
              <h4>Overall Project Manager</h4>
              <div className="org">Software Research Group, Polytechnic University of the Philippines</div>
              <ul>
                <li>Oversaw multiple concurrent software projects under a single governance standard.</li>
                <li>Built risk planning into each project lifecycle and coordinated teams through Agile ceremonies.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <time>Mar 2025 – Dec 2025</time>
            <div>
              <h4>Data Processing Assistant</h4>
              <div className="org">Hapinoy, Quezon City</div>
              <ul>
                <li>Processed and validated business data for accuracy, completeness and consistency, following data-handling policies.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="how" id="process">
          <h3>How I work</h3>
          <div className="steps">
            <div>
              <h4>Understand the problem</h4>
              <p>Ask the right questions to learn what the business needs and why, before proposing anything.</p>
            </div>
            <div>
              <h4>Map the process</h4>
              <p>Document how work really flows, find the gaps and show them in simple diagrams.</p>
            </div>
            <div>
              <h4>Define clear requirements</h4>
              <p>Write user stories and acceptance criteria that teams can build and test against.</p>
            </div>
            <div>
              <h4>Let the data guide</h4>
              <p>Use data and AI tools to speed up analysis, then check the results by hand.</p>
            </div>
            <div>
              <h4>Align everyone</h4>
              <p>Keep stakeholders, product managers and engineers on the same page, and welcome feedback.</p>
            </div>
          </div>
        </section>
        <section className="projects" id="projects">
          <h3>Key projects</h3>
          <div className="grid kp">
            <div className="card">
              <h4>StewardFM</h4>
              <p>GFMIC Financial Management System. Coordinated three interdependent modules (Events, Membership, Finance) to a shared requirements baseline and delivery schedule.</p>
              <span className="go">Project Lead & Business Analyst · Python Django</span>
            </div>
            <div className="card">
              <h4>POS with Food Ordering & Kitchen Display</h4>
              <p>Managed Agile delivery of a three-part restaurant operations system, and built and tested Tailwind CSS interfaces.</p>
              <span className="go">Project Manager & Front-End Developer · PHP Laravel</span>
            </div>
            <div className="card">
              <h4>AI-Powered E-Commerce Platform</h4>
              <p>Directed tasks and timelines to keep output aligned with client requirements, and evaluated AI-generated output against requirements before release.</p>
              <span className="go">Project Lead & Business Analyst · Python Django</span>
            </div>
            <div className="card">
              <h4>Traffic Management & Monitoring System</h4>
              <p>Ran requirements gathering and gap analysis to define scope and surface process inefficiencies, and supported testing with development teams.</p>
              <span className="go">Business Analyst & Project Manager</span>
            </div>
          </div>
          <h3 className="sub">Web design work</h3>
          <div className="feat">
            <div className="shots">
              <img src="/assets/images/ink3ee-homepage.jpg" alt="Ink3ee Company homepage with interactive mug press" />
              <img src="/assets/images/ink3ee-print-section.jpg" alt="Ink3ee Company What we print section with draggable magnets" />
            </div>
            <div className="meta">
              <div>
                <h4>Ink3ee Company</h4>
                <p>Website for a custom printing shop. Visitors try the product before ordering: type a name, pick lettering and ink color, and hold to press it on a mug. Draggable fridge magnets explain each product.</p>
              </div>
            </div>
          </div>
          <div className="grid">
            <a className="card lm" href="https://lovemave.vercel.app/" target="_blank" rel="noopener">
              <h4>love, mave</h4>
              <p>Browsing as play: drag mugs around a styling table, then open one to choose glaze, size and design. Keyboard controls included.</p>
              <span className="go">View site ↗</span>
            </a>
            <a className="card cc" href="https://carcy-five.vercel.app/" target="_blank" rel="noopener">
              <h4>CarCy 3D Shop</h4>
              <p>A product gallery that leads to an order: color previews and a three-step personalization flow.</p>
              <span className="go">View site ↗</span>
            </a>
            <a className="card bb" href="https://bambileigh.vercel.app/" target="_blank" rel="noopener">
              <h4>bambi.byleigh</h4>
              <p>A museum-style shop for handmade art, with a product page, gallery and commission request flow.</p>
              <span className="go">View site ↗</span>
            </a>
          </div>
        </section>
        <section className="skl" id="skills">
          <h3>Skills & credentials</h3>
          <div>
            <h5>Business analysis</h5>
            <div className="chips"><span>Requirements gathering</span><span>Gap & functional analysis</span><span>BRDs & functional specifications</span><span>Process improvement</span><span>Stakeholder analysis</span><span>UAT support</span></div>
          </div>
          <div>
            <h5>Project management</h5>
            <div className="chips"><span>Agile & Waterfall</span><span>SDLC</span><span>Sprint planning</span><span>Milestone tracking</span><span>Status reporting</span><span>Risk mitigation</span><span>Project governance</span></div>
          </div>
          <div>
            <h5>Tools & technical exposure</h5>
            <div className="chips"><span>Jira</span><span>Confluence</span><span>Trello</span><span>Notion</span><span>Google Workspace</span><span>Microsoft Excel</span><span>Shopify</span><span>Python (Django)</span><span>PHP (Laravel)</span><span>Tailwind CSS</span><span>REST/API integration</span><span>Git/GitHub</span><span>Docker</span></div>
          </div>
          <div>
            <h5>Education & certifications</h5>
            <ul className="certs">
              <li>BS in Information Technology, Polytechnic University of the Philippines (2022 – 2026)</li>
              <li>Agile Project Management (Nov 2026)</li>
              <li>Project Planning: Putting It All Together, Google (Coursera) (Sep 2026)</li>
              <li>Business Analysis and Process Management, Google (Coursera) (Nov 2025)</li>
              <li>Foundations of Project Management, Google (Coursera) (Jul 2025)</li>
              <li>Project Initiation: Starting a Successful Project, Google (Coursera) (Jul 2025)</li>
              <li>How to Use Roadmaps in Jira, Coursera (Jul 2025)</li>
              <li>Quality Assurance, mabl (Jun 2025)</li>
            </ul>
          </div>
        </section>
        <footer id="contact">
          <h3>Let’s turn your goals into results</h3>
          <a className="btn o" href={linkedinUrl}>Get in touch <i>→</i></a>
          <p className="ft"><a href="mailto:shanella.asinero@gmail.com">shanella.asinero@gmail.com</a> · <a href={linkedinUrl} target="_blank" rel="noopener">LinkedIn</a></p>
        </footer>
      </div>
    </>
  );
}
