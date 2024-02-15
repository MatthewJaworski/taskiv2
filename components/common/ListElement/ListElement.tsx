import Link from 'next/link';
import Button from '../Button/Button';
import Container from '../Container/Container';

export interface IListElementProps {
  name: string;
  assignedTo: string;
  id: string;
  href: string;
}

const ListElement = ({ name, assignedTo, id, href }: IListElementProps) => {
  return (
    <Container
      className="grid grid-cols-3 max-md:grid-cols-1 gap-4 items-center"
      intent={'secondary'}
    >
      <p>{name}</p>
      <p>Assigned to: {assignedTo}</p>
      <Link className="px-10 w-full" href={`/${href}/${id}`}>
        <Button className="w-full" size="medium">
          Open
        </Button>
      </Link>
    </Container>
  );
};

export default ListElement;
