import Link from 'next/link';
import Button from '../Button/Button';
import Container from '../Container/Container';

export interface IProjectCardProps  {
  name: string;
  description?: string;
  id: string;
};

const ProjectCard = ({ name, description, id }: IProjectCardProps) => {
  return (
    <Container className="flex flex-col align-middle text-pretty items w-[200px] h-[300px] ">
      <p className="text-wrap font-bold text-xl text-secondary">{name}</p>
      <p className='overflow-clip h-full' >{description}</p>
      <Link className="mt-auto justify-self-end w-full" href={`/project/${id}`}>
        <Button className='w-full'>Open</Button>
      </Link>
    </Container>
  );
};

export default ProjectCard;
