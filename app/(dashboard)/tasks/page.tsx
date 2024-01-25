import Container from '@/components/Container/Container';
import Tasks from '@/components/Tasks/Tasks';
import { getAllUserProjects } from '@/lib/api';
import { getJWTFromCookie, getUserDataFromCookie } from '@/lib/auth';
import { TTokenUser } from '@/types/auth';
import { TProject } from '@/types/projects';

function filterProjectsByUser(projects: TProject[], userId: string) {
  return projects.filter((project) => {
    return project.stories.some((story) => story.assignedTo?.id === userId);
  });
}
const Page = async () => {
  const { id, role } = (await getUserDataFromCookie()) as TTokenUser;
  const token = await getJWTFromCookie();
  const { projects } = (await getAllUserProjects(id, token!)) as {
    projects: TProject[];
  };
  const isUser = role === 'User';
  const projectWhereUserIsAssigned = filterProjectsByUser(projects, id);

  return (
    <Container>
      {isUser ? (
        <h1 className="text-5xl font-semibold mb-4">Tasks assigned to You</h1>
      ) : (
        <h1 className="text-5xl font-semibold mb-4">All Tasks</h1>
      )}
      <Tasks projects={projectWhereUserIsAssigned} />
    </Container>
  );
};
export default Page;
