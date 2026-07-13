import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('home');

export default function Page() {
  return <AndaluciaApp />;
}
