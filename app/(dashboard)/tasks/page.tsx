import Container from '@/components/Container/Container';
import StoryCard from '@/components/StoryCard/StoryCard';
import { getAllUserProjects } from '@/lib/api';
import { getJWTFromCookie, getUserDataFromCookie } from '@/lib/auth';
import { TTokenUser } from '@/types/auth';
import { TProject } from '@/types/projects';

function filterProjectsByUser(projects: TProject[], userId: string) {
  return projects.filter((project) => {
    return project.stories.some((story) => story.assignedTo?.id === userId);
  });
}
const Tasks = async () => {
  const { id } = (await getUserDataFromCookie()) as TTokenUser;
  const token = await getJWTFromCookie();
  const { projects } = await getAllUserProjects(id, token!) as {projects: TProject[]};
  const projectWhereUserIsAssigned = filterProjectsByUser(projects, id);


  return (
    <Container>
      <h1 className="text-5xl font-semibold">Tasks assigned to You</h1>
      {projectWhereUserIsAssigned.map((project: TProject) => (
        <Container key={project.id} className='mt-4'>
          <p className="text-2xl font-semibold">{project.name}</p>
          <Container className='mt-4'>
            {project.stories.map((story) => (
              <StoryCard
                description={story.description}
                id={story.id}
                name={story.name}
                key={story.id}
              />
            ))}
          </Container>
        </Container>
      ))}
    </Container>
  );
};
export default Tasks;
