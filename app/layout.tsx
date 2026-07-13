import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { pageSeo, siteUrl } from '@/lib/content';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageSeo.home.title,
    template: '%s | Andalucia Engineering Consulting',
  },
  description: pageSeo.home.description,
  applicationName: 'Andalucia Engineering Consulting',
  manifest: '/manifest.webmanifest',
  keywords: [
    'Andalucia Group',
    'andaluciagroup',
    'andaluciagroup.eu',
    'Andalucia Engineering Consulting',
    'Andalucia Group engineering',
    'Andalucia Group Budapest',
    'civil engineering consultancy',
    'water resources engineering',
    'construction supervision',
    'FIDIC contract administration',
    'infrastructure consulting Budapest',
    'technical advisory',
    'project management',
    'quantity surveying',
    'MENA infrastructure',
    'Central Asia water infrastructure',
  ],
  authors: [{ name: 'Andalucia Engineering Consulting' }],
  creator: 'Andalucia Engineering Consulting',
  publisher: 'Andalucia Engineering Consulting',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Andalucia Engineering Consulting',
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: [
      {
        url: '/home/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Andalucia Engineering Consulting infrastructure consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: ['/home/hero.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Andalucia Engineering Consulting',
    alternateName: [
      'Andalucia Group',
      'andaluciagroup',
      'Andalucia Engineering',
      'Andalucia Engineering Consultancy',
    ],
    url: siteUrl,
    identifier: siteUrl,
    legalName: 'Andalucia Engineering Consulting',
    image: `${siteUrl}/home/logo.png`,
    description: pageSeo.home.description,
    email: 'info@andaluciagroup.eu',
    telephone: '+36203769275',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Honvéd utca 8.',
      postalCode: '1054',
      addressLocality: 'Budapest',
      addressCountry: 'HU',
    },
    areaServed: ['Europe', 'MENA', 'Central Asia'],
    serviceType: [
      'Civil engineering consultancy',
      'Water resources engineering',
      'Construction supervision',
      'FIDIC contract administration',
      'Technical advisory',
      'Project management',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Andalucia Group',
    alternateName: [
      'Andalucia Engineering Consulting',
      'andaluciagroup.eu',
      'Andalucia Engineering',
    ],
    url: siteUrl,
    inLanguage: 'en',
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

