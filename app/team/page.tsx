import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('team');

export default function TeamRoute() {
  return <AndaluciaApp initialPage="team" />;
}
