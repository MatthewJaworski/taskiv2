'use client';
import revalidateAllProjects from '@/actions/revalidateProjects';
import { removeUserFromProject } from '@/lib/api';
import { TResponse } from '@/types/response';
import Button from '../Button/Button';
import Container from '../Container/Container';

interface UserListElementProps {
  name: string;
  owner?: boolean;
  userId: string;
  projectId: string;
  token: string;
  canDelete?: boolean;
}

const UserListElement = ({
  name,
  owner,
  userId,
  projectId,
  token,
  canDelete,
}: UserListElementProps) => {
  const onClickHandler = async () => {
    const userToDelete = {
      userId,
      projectId,
    };
    const result = (await removeUserFromProject({
      data: userToDelete,
      token,
    })) as TResponse;
    if (result.success) {
      await revalidateAllProjects();
    }
  };
  return (
    <Container
      className="grid grid-cols-2 gap-4 items-center"
      intent={'secondary'}
    >
      <p>{name}</p>

      {owner ? (
        <p>Owner</p>
      ) : (
        canDelete && (
          <Button
            onClick={onClickHandler}
            className="px-10  w-full"
            size="medium"
          >
            Delete
          </Button>
        )
      )}
    </Container>
  );
};

export default UserListElement;
