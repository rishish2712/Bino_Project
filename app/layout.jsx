import './globals.css';

export const metadata = {
  title: 'Ask Bino',
  description: 'Search smarter via WhatsApp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
