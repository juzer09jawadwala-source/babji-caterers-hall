import type { Metadata } from 'next';
import { Cormorant_Garamond, Karla } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ScrollProgress } from '@/components/ScrollProgress';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://babji-caterers-hall.vercel.app'), // Placeholder for Vercel
  title: 'Babji Caterers & Hall | Since 1965 | Mazgaon, Mumbai',
  description: 'Full-service catering and a warm function hall — trusted by families in Mazgaon for weddings, pre-wedding functions and community celebrations since 1965.',
  keywords: ['catering', 'function hall', 'mazgaon', 'mumbai', 'babji caterers', 'wedding catering', 'events'],
  authors: [{ name: 'Babji Caterers' }],
  openGraph: {
    title: 'Babji Caterers & Hall | Mazgaon, Mumbai',
    description: 'Full-service catering and a warm function hall trusted by families since 1965.',
    images: [{ url: '/images/regenerate_2K_202608301011.jpeg' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Babji Caterers & Hall | Mazgaon, Mumbai',
    description: 'Full-service catering and a warm function hall trusted by families since 1965.',
    images: ['/images/regenerate_2K_202608301011.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${karla.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Caterer"],
              "name": "Babji Caterers & Hall",
              "image": "/images/sizzler.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sitafalwadi, Mazgaon",
                "addressLocality": "Mumbai",
                "postalCode": "400010",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": ["+918976086766", "+919664074104"],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "10:00",
                "closes": "22:00"
              },
              "foundingDate": "1965"
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased relative selection:bg-gold-light/40 selection:text-espresso overflow-x-hidden">
        <ScrollProgress />
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
