import { useTranslation } from 'react-i18next';
import PageHeader from '@/components/PageHeader';
import ProjectsGrid from '@/components/ProjectsGrid';
import { IMAGES } from '@/data';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        title={t('projectsPage.pageTitle')}
        subtitle={t('projectsPage.pageSubtitle')}
        image={IMAGES.pageHeaders.projects}
        breadcrumb={t('projectsPage.breadcrumb')}
      />

      <ProjectsGrid showFilter />
    </>
  );
}
