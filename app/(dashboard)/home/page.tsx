import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import StoryCard from '@/components/StoryCard/StoryCard';
import { getAllUserProjects, getAllUserStories } from '@/lib/api';
import { getJWTFromCookie, getUserDataFromCookie } from '@/lib/auth';
import { TTokenUser } from '@/types/auth';
import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import Link from 'next/link';

const Home = async () => {
  const { id, fullName } = (await getUserDataFromCookie()) as TTokenUser;
  const token = await getJWTFromCookie();

  const { projects } = (await getAllUserProjects(id, token!)) as {
    projects: TProject[];
  };
  const { stories } = (await getAllUserStories(id, token!)) as {
    stories: TStory[];
  };

  const userProjects = projects.filter(
    (project: TProject) => project.userId === id
  );

  return (
    <Container>
      <p className="text-5xl font-semibold">Welcome back {fullName}!</p>
      <Container className="mt-4">
        <p className="text-2xl font-semibold">Your projects</p>
        <div className="grid grid-cols-auto-fit-s gap-2 mt-4">
          {userProjects.slice(0, 4).map((project: TProject) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              id={project.id}
            />
          ))}
        </div>
        <Link href="/overview">
          <Button intent="secondary" className="mt-4 w-full">
            Check all
          </Button>
        </Link>
      </Container>
      <Container className="mt-4">
        <p className="text-2xl font-semibold">Stories assigned to You</p>
        <div className="grid grid-cols-auto-fit-s gap-2 mt-4">
          {stories.slice(0, 4).map((story: any) => (
            <StoryCard
              key={story.id}
              name={story.name}
              description={story.description}
              id={story.id}
            />
          ))}
        </div>
        <Link href="/tasks">
          <Button intent="secondary" className="mt-4 w-full">
            Check all
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Home;
