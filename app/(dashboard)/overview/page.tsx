import Container from '@/components/Container/Container';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const Home = () => {
  return (
    <Container>
      <h1 className="text-5xl font-semibold max-w-lg">All Projects</h1>
      <Container className="mt-4 grid gap-4 grid-cols-auto-fit-s">
        <ProjectCard name="nazwa kqweqweqweqweqweqwearty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
        <ProjectCard name="nazwa karty" description="opis tej kartki" />
      </Container>
    </Container>
  );
};

export default Home;
