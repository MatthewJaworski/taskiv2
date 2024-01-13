import Link from 'next/link';
import Button from '../Button/Button';
import Container from '../Container/Container';
interface StoryListElementProps {
  name: string;
  assignedTo: string;
  id: string;
}

const StoryListElement = ({ name, assignedTo, id }: StoryListElementProps) => {
  return (
    <Container
      className="grid grid-cols-3 max-md:grid-cols-1 gap-4 items-center"
      intent={'secondary'}
    >
      <p>{name}</p>
      <p>Assigned to: {assignedTo}</p>
      <Link className="px-10 w-full" href={`/story/${id}`}>
        <Button className="w-full" size="medium">
          Open
        </Button>
      </Link>
    </Container>
  );
};

export default StoryListElement;
