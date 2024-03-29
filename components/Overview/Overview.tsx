'use client';
import { TProject } from '@/types/projects';
import { useState } from 'react';
import CardDisplayer from '../CardDisplayer/CardDisplayer';
import Container from '../Container/Container';
import Input from '../Input/Input';
import ProjectCard from '../ProjectCard/ProjectCard';

interface IOverviewProps {
  projects: TProject[];
}
const Overview = ({ projects }: IOverviewProps) => {
  const [filterText, setFilterText] = useState<string>('');
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <>
      <Container>
        <Input
          type="text"
          name="Filtr by project name"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Container>
      <Container className=" mt-4 grid gap-4 grid-cols-auto-fit-s h-max break-words">
        {filteredProjects.length > 0 ? (
          <CardDisplayer Card={ProjectCard} elements={filteredProjects} />
        ) : (
          <p className="text-2xl text-center font-semibold">
            No projects found
          </p>
        )}
      </Container>
    </>
  );
};

export default Overview;
