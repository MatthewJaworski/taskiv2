'use client';
import Button from '@/components/Button/Button';
import { useDeleteUser } from '@/hooks/useDeleteUser';

interface IDeleteUserButtonProps {
  id: string;
  token: string;
}
const DeleteUserButton = ({ id, token }: IDeleteUserButtonProps) => {
  const deleteHandler = useDeleteUser(id, token);
  return (
    <Button onClick={deleteHandler} className="mt-4 w-full" intent="text">
      Delete user
    </Button>
  );
};

export default DeleteUserButton;
