import AndaluciaApp from '@/components/AndaluciaApp';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('projects');

export default function ProjectsRoute() {
  return <AndaluciaApp initialPage="projects" />;
}
