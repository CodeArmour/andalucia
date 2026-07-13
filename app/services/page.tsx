import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('services');

export default function ServicesRoute() {
  return <AndaluciaApp initialPage="services" />;
}
