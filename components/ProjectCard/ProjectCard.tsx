import Link from 'next/link';
import Button from '../Button/Button';
import Container from '../Container/Container';

type ProjectCardProps = {
  name: string;
  description: string;
  id: string;
  token?: string;
};

const ProjectCard = ({ name, description, id, token }: ProjectCardProps) => {
  return (
    <Container className="flex flex-col align-middle text-pretty items w-[200px] h-[300px] ">
      <p className="text-wrap font-bold text-xl text-secondary">{name}</p>
      <p>{description}</p>
      <Link className="mt-auto justify-self-end" href={`/project/${id}`}>
        <Button>Open</Button>
      </Link>
    </Container>
  );
};

export default ProjectCard;
