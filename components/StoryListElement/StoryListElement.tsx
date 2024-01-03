import Button from '../Button/Button';
import Container from '../Container/Container';
interface StoryListElementProps {
  name: string;
  assignedTo: string;
}

const StoryListElement = ({ name, assignedTo }: StoryListElementProps) => {
  return (
    <Container
      className="flex justify-around items-center"
      intent={'secondary'}
    >
      <p>{name}</p>
      <p>Assigned to: {assignedTo}</p>
      <Button className='px-10' size="medium">Open</Button>
    </Container>
  );
};

export default StoryListElement;
