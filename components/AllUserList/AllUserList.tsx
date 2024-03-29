import { getUserIdFromCookie } from '@/lib/auth';
import { TProject } from '@/types/projects';
import UserListElement from '../UserListElement/UserListElement';

interface AllUserListProps {
  projectData: TProject;
  token: string;
}
const AllUserList = async ({ projectData, token }: AllUserListProps) => {
  const { users } = projectData;
  const currentUserId = await getUserIdFromCookie();
  const isUserOwner = currentUserId === projectData.userId;
  return (
    <ul className="flex flex-col gap-2">
      {users.map((user) => {
        return user.id === projectData.userId ? (
          <UserListElement
            owner
            canDelete={isUserOwner}
            token={token!}
            key={user.id}
            name={user.name}
            projectId={projectData.id}
            userId={user.id}
          />
        ) : (
          <UserListElement
            canDelete={isUserOwner}
            key={user.id}
            token={token!}
            name={user.name}
            projectId={projectData.id}
            userId={user.id}
          />
        );
      })}
    </ul>
  );
};
export default AllUserList;
