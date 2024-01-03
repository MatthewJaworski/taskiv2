import ProjectPanel from '@/components/ProjectPanel/ProjectPanel';
import { getProject } from '@/lib/api';
import { getJWTFromCookie } from '@/lib/auth';
import { TProject } from '@/types/projects';
import { NextPage } from 'next';

interface ProjectPageProps {
  params: {
    id: string;
  };

}

const ProjectPage: NextPage<ProjectPageProps> = async ({ params: { id } }) => {
  const token = await getJWTFromCookie()!;
  const data = await getProject(id,token) as TProject;
  return <ProjectPanel token={token} id={id} projectData={data} />;
};

export default ProjectPage;
