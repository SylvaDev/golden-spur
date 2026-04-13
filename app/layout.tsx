import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goldenspurmotorinn.com'),
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  title: 'Golden Spur Motor Inn | Newport, WA Motel',
  description:
    'Stay at Golden Spur Motor Inn in Newport, Washington. Enjoy free Wi‑Fi, in-room coffee, cable TV, refrigerator and microwave, and convenient Highway 2 access.',
  openGraph: {
    title: 'Golden Spur Motor Inn',
    description:
      'Comfortable, convenient lodging in Newport, WA with free Wi‑Fi, cable TV, and updated room amenities.',
    url: 'https://www.goldenspurmotorinn.com',
    siteName: 'Golden Spur Motor Inn',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
