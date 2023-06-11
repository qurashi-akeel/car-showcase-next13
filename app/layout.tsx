import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Car Showcase Hub',
  description:
    'Find, Book or rent a car — Quickly & Easily. Streamline your car rental expreience with our with effortless booking service',
  author: 'Qurashi Akeel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
