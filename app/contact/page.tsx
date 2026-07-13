import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('contact');

export default function ContactRoute() {
  return <AndaluciaApp initialPage="contact" />;
}
