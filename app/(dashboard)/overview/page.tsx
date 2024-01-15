import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import Overview from '@/components/Overview/Overview';
import { getAllUserProjects } from '@/lib/api';
import { getJWTFromCookie, getUserIdFromCookie } from '@/lib/auth';
import { TProject } from '@/types/projects';
import Link from 'next/link';

const Home = async () => {
  const userId = await getUserIdFromCookie();
  const token = await getJWTFromCookie();
  const { projects } = (await getAllUserProjects(
    userId as string,
    token as string
  )) as any;

  const userProjects = projects.filter(
    (project: TProject) => project.userId === userId
  );

  return (
    <Container>
      <h1 className="text-5xl font-semibold max-w-lg mb-4">All Projects</h1>
      {userProjects.length ? (
        <Overview projects={projects} />
      ) : (
        <Container className="mt-4 flex flex-col  justify-center text-center h-max break-words ">
          <h2 className="text-3xl font-semibold">You have no projects</h2>
          <p className="mt-4 text-xl">Start one now!</p>
          <Link href="/new-project">
            <Button className="w-40 mt-2 self-center" intent="secondary">
              Create
            </Button>
          </Link>
        </Container>
      )}
    </Container>
  );
};

export default Home;
