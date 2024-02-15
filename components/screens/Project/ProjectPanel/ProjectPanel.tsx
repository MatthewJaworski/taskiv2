import { getUserDataFromCookie } from '@/lib/auth';
import { formatDate } from '@/lib/time';
import { TTokenUser } from '@/types/auth';
import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import Container from '../../../common/Container/Container';
import AddUser from '../AddUser/AddUser';
import AllStoryList from '../AllStoryList/AllStoryList';
import AllUserList from '../AllUserList/AllUserList';
import DeleteProjectButton from '../DeleteProjectButton/DeleteProjectButton';
import NewTask from '../NewTask/NewTask';

interface ProjectPanelProps {
  token: string;
  id: string;
  projectData: TProject;
  userId: string;
  stories: TStory[];
}

const ProjectPanel = async ({
  token,
  id,
  projectData,
  stories,
}: ProjectPanelProps) => {
  const { id: userId, role } = (await getUserDataFromCookie()) as TTokenUser;

  const isAdmin = role === 'Admin';
  const isUserOwner = userId === projectData.userId;

  return (
    <>
      <Container>
        <h1 className="text-5xl font-semibold">{projectData.name}</h1>
        <div className="flex justify-start mt-4 gap-2">
          {projectData.tags.map((tag) => (
            <Container
              key={tag}
              size="small"
              className="flex mx-0 justify-center items-center max-w-32"
              intent="secondary"
            >
              <p>{tag}</p>
            </Container>
          ))}
        </div>
        <Container className="mt-4">
          <h2 className="text-wrap">{projectData.description}</h2>
          <p>Created: {formatDate(projectData.createDate)}</p>
        </Container>

        <p className="text-xl font-semibold mt-4 max-w-lg">Stories</p>
        <AllStoryList stories={stories} projectData={projectData} />
        <Container className="grid gap-4 grid-cols-auto-fit-m mt-4">
          <NewTask
            token={token}
            userId={isAdmin ? projectData.userId : userId}
            tags={projectData.tags}
            projectId={projectData.id}
            users={projectData.users}
          />
          <>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Users</p>
              <Container>
                <AllUserList token={token} projectData={projectData} />
                {isUserOwner && (
                  <AddUser token={token} projectData={projectData} />
                )}
              </Container>
            </div>
          </>
        </Container>
        {(isUserOwner || isAdmin) && (
          <DeleteProjectButton token={token} id={id} />
        )}
      </Container>
    </>
  );
};

export default ProjectPanel;
