import ProjectPanel from '@/components/ProjectPanel/ProjectPanel';
import { getProject } from '@/lib/api';
import { getJWTFromCookie, getUserIdFromCookie } from '@/lib/auth';
import { TProject } from '@/types/projects';
import { NextPage } from 'next';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

const ProjectPage: NextPage<ProjectPageProps> = async ({ params: { id } }) => {
  const token = await getJWTFromCookie()!;
  const userId = (await getUserIdFromCookie()) as string;

  const data = (await getProject(id, token)) as TProject;
  const { stories } = data;
  return (
    <ProjectPanel token={token} userId={userId} id={id} projectData={data} stories={stories} />
  );
};

export default ProjectPage;
