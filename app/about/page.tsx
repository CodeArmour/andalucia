import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('about');

export default function AboutRoute() {
  return <AndaluciaApp initialPage="about" />;
}
