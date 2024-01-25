'use client';
import Button from '@/components/Button/Button';
import { useDeleteTask } from '@/hooks/useDeleteTask';

interface IDeleteTaskButtonProps {
  id: string;
  token: string;
}
const DeleteUserButton = ({ id, token }: IDeleteTaskButtonProps) => {
  const deleteHandler = useDeleteTask(id, token);
  return (
    <Button onClick={deleteHandler} className="mt-4 w-full" intent="text">
      Delete task
    </Button>
  );
};

export default DeleteUserButton;
