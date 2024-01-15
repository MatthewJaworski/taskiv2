'use client';
import { TProject } from '@/types/projects';
import { useState } from 'react';
import CardDisplayer from '../CardDisplayer/CardDisplayer';
import Container from '../Container/Container';
import Input from '../Input/Input';
import StoryCard from '../StoryCard/StoryCard';

interface ITasksProps {
  projects: TProject[];
}

const Tasks = ({ projects }: ITasksProps) => {
  const [filterProjectName, setFilterProjectName] = useState<string>('');
  const [filterTaskName, setFilterTaskName] = useState<string>('');

  const filteredProjects = projects
    .filter((project) =>
      project.name.toLowerCase().includes(filterProjectName.toLowerCase())
    )
    .map((project) => ({
      ...project,
      stories: project.stories.filter((story) =>
        story.name.toLowerCase().includes(filterTaskName.toLowerCase())
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
      <Container className='mt-4'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project: TProject) => (
            <Container key={project.id} className="mt-4">
              <p className="text-2xl font-semibold">{project.name}</p>
              <Container className="mt-4 flex">
                <CardDisplayer Card={StoryCard} elements={project.stories} />
              </Container>
            </Container>
          ))
        ) : (
          <p className="text-2xl text-center font-semibold">
            No projects found
          </p>
        )}
      </Container>
    </>
  );
};

export default Tasks;
