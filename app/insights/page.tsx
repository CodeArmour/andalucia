import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('insights');

export default function InsightsRoute() {
  return <AndaluciaApp initialPage="insights" />;
}
