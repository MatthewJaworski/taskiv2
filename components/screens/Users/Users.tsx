'use client';
import { useState } from 'react';
import UserCard from '../../cards/UserCard/UserCard';
import Container from '../../common/Container/Container';
import Input from '../../common/Input/Input';
import { OptionType } from '../../common/Search/Search';

interface IUsersProps {
  users: OptionType[];
}
const Users = ({ users }: IUsersProps) => {
  const [filterText, setFilterText] = useState<string>('');

  const filteredUsers = users.filter((user) =>
    user.label.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <>
      <Container>
        <Input
          type="text"
          name="Filter by username"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Container>
      <Container className="grid grid-cols-auto-fit-s gap-4 mt-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard user={user} key={user.value as string} />
          ))
        ) : (
          <p className="text-2xl text-center font-semibold">No users found</p>
        )}
      </Container>
    </>
  );
};

export default Users;
