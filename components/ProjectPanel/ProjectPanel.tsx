'use client';
import revalidateAllProjects from '@/actions/revalidateProjects';
import { deleteProject } from '@/lib/api';
import { formatDate } from '@/lib/time';
import { TProject } from '@/types/projects';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import NewTask from '../NewTask/NewTask';
import StoryListElement from '../StoryListElement/StoryListElement';

interface ProjectPanelProps {
  token: string;
  id: string;
  projectData: TProject;
}

const ProjectPanel = ({ token, id, projectData }: ProjectPanelProps) => {
  const router = useRouter();
  const deleteHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const reponse = await deleteProject(id, token);
    if (reponse.success) {
      revalidateAllProjects();
      router.push('/overview');
    }
  };

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
        <Container>
          <ul className="flex flex-col gap-2">
            <StoryListElement assignedTo="daniel" name="magikal" />
            <StoryListElement assignedTo="daniel" name="magikal" />
            <StoryListElement assignedTo="daniel" name="magikal" />
            <StoryListElement assignedTo="daniel" name="magikal" />
          </ul>
        </Container>

        <NewTask tags={projectData.tags} />
        <Button onClick={deleteHandler} className="mt-4 w-full" intent="text">
          Delete project
        </Button>
      </Container>
    </>
  );
};

export default ProjectPanel;
