import type { Metadata } from 'next';
import { pagePaths, pageSeo, siteUrl, type PageId } from '@/lib/content';

export function metadataFor(page: PageId): Metadata {
  const seo = pageSeo[page];
  const path = pagePaths[page];
  const url = `${siteUrl}${path === '/' ? '' : path}`;

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    alternates: {
      canonical: path,
      languages: {
        en: path,
        'x-default': path,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: 'Andalucia Engineering Consulting',
      type: 'website',
      images: [
        {
          url: page === 'home' ? '/home/hero.jpg' : '/home/logo.png',
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [page === 'home' ? '/home/hero.jpg' : '/home/logo.png'],
    },
  };
}
