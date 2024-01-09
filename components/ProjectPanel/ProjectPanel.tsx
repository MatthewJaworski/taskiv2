import { formatDate } from '@/lib/time';
import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import AddUser from '../AddUser/AddUser';
import AllStoryList from '../AllStoryList/AllStoryList';
import AllUserList from '../AllUserList/AllUserList';
import Container from '../Container/Container';
import NewTask from '../NewTask/NewTask';
import DeleteProjectButton from './DeleteProjectButton/DeleteProjectButton';

interface ProjectPanelProps {
  token: string;
  id: string;
  projectData: TProject;
  userId: string;
  stories: TStory[];
}

const ProjectPanel = ({
  token,
  id,
  projectData,
  stories,
}: ProjectPanelProps) => {
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
          <h2>{projectData.description}</h2>
          <p>Created: {formatDate(projectData.createDate)}</p>
        </Container>

        <p className="text-xl font-semibold mt-4 max-w-lg">Stories</p>
        <AllStoryList stories={stories} projectData={projectData} />
        <Container className="grid gap-4 grid-cols-2 mt-4">
          <NewTask
            token={token}
            userId={projectData.userId}
            tags={projectData.tags}
            projectId={projectData.id}
            users={projectData.users}
          />
          <>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">Users</p>
              <Container>
                <AllUserList token={token} projectData={projectData} />
                <AddUser token={token} projectData={projectData} />
              </Container>
            </div>
          </>
        </Container>
        <DeleteProjectButton token={token} id={id} />
      </Container>
    </>
  );
};

export default ProjectPanel;
