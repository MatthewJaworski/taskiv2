'use client';
import { TProject } from '@/types/projects';
import Link from 'next/link';
import { useState } from 'react';
import StoryCard from '../../cards/StoryCard/StoryCard';
import Button from '../../common/Button/Button';
import CardDisplayer from '../../common/CardDisplayer/CardDisplayer';
import Container from '../../common/Container/Container';
import Input from '../../common/Input/Input';

interface ITasksProps {
  projects: TProject[];
  userId: string;
}

const Tasks = ({ projects, userId }: ITasksProps) => {
  const [filterProjectName, setFilterProjectName] = useState<string>('');
  const [filterTaskName, setFilterTaskName] = useState<string>('');

  const filteredProjects = projects
    .filter((project) =>
      project.name.toLowerCase().includes(filterProjectName.toLowerCase())
    )
    .map((project) => ({
      ...project,
      stories: project.stories.filter(
        (story) =>
          story.name.toLowerCase().includes(filterTaskName.toLowerCase()) &&
          story.assignedTo.id == userId
      ),
    }))
    .filter((project) => project.stories.length > 0);

  return (
    <>
      <Container>
        <p className="font-semibold text-2xl">Filters</p>
        <div className="grid grid-cols-auto-fit-l gap-4">
          <Input
            type="text"
            name="Project name"
            onChange={(e) => setFilterProjectName(e.target.value)}
          />
          <Input
            type="text"
            name="Task name"
            onChange={(e) => setFilterTaskName(e.target.value)}
          />
        </div>
      </Container>
      <Container className="mt-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project: TProject) => (
            <Container key={project.id} className="mt-4">
              <div className="grid grid-cols-auto-fit-s">
                <p className="text-2xl font-semibold">{project.name}</p>
                <Link className="m-auto w-full" href={`/project/${project.id}`}>
                  <Button className="w-full" intent="secondary">
                    Open project
                  </Button>
                </Link>
              </div>
              <Container className="mt-4 grid grid-cols-auto-fit-s">
                <CardDisplayer Card={StoryCard} elements={project.stories} />
              </Container>
            </Container>
          ))
        ) : (
          <p className="text-2xl text-center font-semibold">No tasks found</p>
        )}
      </Container>
    </>
  );
};

export default Tasks;
