import Link from 'next/link';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import { OptionType } from '../../common/Search/Search';
export interface IUserCardProps {
  user: OptionType;
}
const UserCard = ({ user }: IUserCardProps) => {
  const { value, label } = user;
  return (
    <Container className="flex flex-col align-middle text-pretty items w-[200px]">
      <p className="text-wrap text-center font-bold text-xl text-secondary">
        {label}
      </p>
      <Link
        className="mt-auto justify-self-end w-full"
        href={`/users/${value}`}
      >
        <Button className="w-full mt-4">Open</Button>
      </Link>
    </Container>
  );
};

export default UserCard;
