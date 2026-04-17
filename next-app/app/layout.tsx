import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://motionagency.mx'),
  title: {
    default: 'Motion Agency | Branding, Diseño Web y Marketing Digital en Los Cabos',
    template: '%s | Motion Agency',
  },
  description:
    'Agencia de marketing digital y branding en Los Cabos, Baja California Sur. Especialistas en branding para desarrolladores inmobiliarios de lujo, diseño web de alta conversión, SEO y campañas de marketing en Los Cabos, La Paz y Cabo San Lucas.',
  keywords: [
    'agencia de marketing Los Cabos',
    'branding Los Cabos',
    'diseño web Cabo San Lucas',
    'marketing digital Baja California Sur',
    'branding inmobiliario Los Cabos',
    'desarrolladores inmobiliarios lujo',
    'SEO Los Cabos',
    'agencia branding Mexico',
    'Motion Agency',
    'presale marketing Mexico',
    'luxury real estate branding',
  ],
  alternates: {
    canonical: 'https://motionagency.mx',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://motionagency.mx',
    siteName: 'Motion Agency',
    title: 'Motion Agency | Branding, Diseño Web y Marketing Digital en Los Cabos',
    description:
      'Agencia de marketing digital y branding en Los Cabos, Baja California Sur. Especialistas en branding para desarrolladores inmobiliarios de lujo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Motion Agency — Branding y Marketing Digital en Los Cabos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motion Agency | Branding, Diseño Web y Marketing Digital en Los Cabos',
    description:
      'Agencia de marketing digital y branding en Los Cabos, Baja California Sur.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-neutral-950 text-white antialiased selection:bg-white selection:text-black">
        <AuthProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
