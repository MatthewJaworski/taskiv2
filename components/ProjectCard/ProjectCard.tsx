import Button from '../Button/Button';
import Container from '../Container/Container';

type ProjectCardProps = {
  name: string;
  description: string;
};

const ProjectCard = ({ name, description }: ProjectCardProps) => {
  return (
    <Container className="flex flex-col align-middle text-pretty items w-[200px] h-[300px] ">
      <p className="text-center text-wrap text-xl">{name}</p>
      <p>{description}</p>
      <Button className=" mt-auto justify-self-end">Open</Button>
    </Container>
  );
};

export default ProjectCard;
