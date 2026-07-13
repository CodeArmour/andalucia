import type { MetadataRoute } from 'next';
import { pagePaths, pageSeo, siteUrl, type PageId } from '@/lib/content';

const pages = Object.keys(pagePaths) as PageId[];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteUrl}${pagePaths[page] === '/' ? '' : pagePaths[page]}`,
    lastModified: new Date('2026-07-13'),
    changeFrequency: page === 'home' ? 'weekly' : 'monthly',
    priority: pageSeo[page].priority,
  }));
}
