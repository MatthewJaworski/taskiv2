'use client';

import {useDeleteProject} from '@/hooks/useDeleteProject';
import { formatDate } from '@/lib/time';
import { TProject } from '@/types/projects';
import { Story } from '@/types/story';
import AllStoryList from '../AllStoryList/AllStoryList';
import Button from '../Button/Button';
import Container from '../Container/Container';
import NewTask from '../NewTask/NewTask';

interface ProjectPanelProps {
  token: string;
  id: string;
  projectData: TProject;
  userId: string;
  stories: Story[];
}

const ProjectPanel = ({
  token,
  id,
  projectData,
  stories,
}: ProjectPanelProps) => {
  const deleteHandler = useDeleteProject(id, token);

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

        <NewTask
          token={token}
          userId={projectData.userId}
          tags={projectData.tags}
          projectId={projectData.id}
          users={projectData.users}
        />
        <Button onClick={deleteHandler} className="mt-4 w-full" intent="text">
          Delete project
        </Button>
      </Container>
    </>
  );
};

export default ProjectPanel;
