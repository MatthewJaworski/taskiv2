import { formatDate } from '@/lib/time';
import Container from '../Container/Container';

interface ICommentProps {
  contnet: string;
  creationDate: string;
  userName: string;
}
const Comment = ({ contnet, creationDate, userName }: ICommentProps) => {
  const date = formatDate(creationDate);
  return (
    <Container>
      <div className="flex justify-between">
        <p className="font-semibold">{userName}</p>
        <p>{date}</p>
      </div>
      <p className="mt-4">{contnet}</p>
    </Container>
  );
};

export default Comment;
