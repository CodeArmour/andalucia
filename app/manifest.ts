import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andalucia Engineering Consulting',
    short_name: 'Andalucia',
    description:
      'Civil and water infrastructure consultancy based in Budapest, Hungary.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff6e5',
    theme_color: '#1e4e72',
    icons: [
      {
        src: '/home/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
