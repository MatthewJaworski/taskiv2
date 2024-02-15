import Container from '@/components/common/Container/Container';
import ListElement from '@/components/common/ListElement/ListElement';
import DeleteUserButton from '@/components/custom/DeleteUserButton/DeleteUserButton';
import { getAllUserData } from '@/lib/api';
import { getJWTFromCookie } from '@/lib/auth';
import { TAllUserData } from '@/types/user';
import { NextPage } from 'next';

interface IUserPageProps {
  params: {
    userId: string;
  };
}
const Page: NextPage<IUserPageProps> = async ({ params: { userId } }) => {
  const token = await getJWTFromCookie()!;
  
  const { user } = (await getAllUserData(userId, token)) as {
    user: TAllUserData;
  };
  const { fullName, assignedStories, email, id, projects, username } = user;

  return (
    <Container>
      <h1 className="text-5xl font-semibold">{fullName}</h1>
      <p className="text-2xl font-semibold text-secondary">Id: {id}</p>
      <Container className="mt-4 grid grid-cols-auto-fit-m">
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </Container>
      <Container className="my-4">
        <h2 className="text-3xl font-semibold mb-4">Assigned Stories</h2>
        <div className=" max-h-[400px] flex flex-col gap-3 overflow-auto scrollbar">
          {assignedStories.map((story) => (
            <ListElement
              assignedTo={story.assignedTo.name}
              id={story.id}
              name={story.name}
              key={story.id}
              href="story"
            />
          ))}
        </div>
      </Container>
      <Container>
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className=" max-h-[400px] flex flex-col gap-3 overflow-auto scrollbar">
          {projects.map((project) => (
            <ListElement
              assignedTo={project.name}
              id={project.id}
              name={project.name}
              key={project.id}
              href="project"
            />
          ))}
        </div>
      </Container>
      <DeleteUserButton token={token} id={userId} />
    </Container>
  );
};

export default Page;
