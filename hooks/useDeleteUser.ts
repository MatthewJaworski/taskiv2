import revalidateAllUsers from '@/actions/revalidateAllUsers';
import { deleteUser } from '@/lib/api';
import { TResponse } from '@/types/response';
import { useRouter } from 'next/navigation';

export const useDeleteUser = (id: string, token: string) => {
  const router = useRouter();
  const deleteHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const reponse = (await deleteUser(id, token)) as TResponse;
    if (reponse.success) {
      revalidateAllUsers();
      router.push('/users');
    }
  };
  return deleteHandler;
};
