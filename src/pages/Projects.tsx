import PageHeader from '@/components/PageHeader';
import ProjectsGrid from '@/components/ProjectsGrid';
import { IMAGES } from '@/data';

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="A showcase of our technical expertise across residential and commercial properties in Dubai."
        image={IMAGES.pageHeaders.projects}
        breadcrumb="Projects"
      />

      <ProjectsGrid showFilter />
    </>
  );
}
