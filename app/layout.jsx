import './globals.css';

export const metadata = {
  title: 'Shanella Cagulang ? Business Analyst',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
