import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('careers');

export default function CareersRoute() {
  return <AndaluciaApp initialPage="careers" />;
}
