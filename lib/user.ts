import { TUser } from '@/types/user';

export const mapUsersToOptions = (
  users?: TUser[]
): { value: string; label: string }[] => {
  if (!users) return [];

  return users.map((user) => {
    const value = user.id;
    const label = user.name;
    return { value, label };
  });
};
