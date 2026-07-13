import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('industries');

export default function IndustriesRoute() {
  return <AndaluciaApp initialPage="industries" />;
}
