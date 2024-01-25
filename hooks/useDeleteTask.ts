import revalidateAllProjects from '@/actions/revalidateProjects';
import { deleteStory } from '@/lib/api';
import { TResponse } from '@/types/response';
import { useRouter } from 'next/navigation';

export const useDeleteTask = (id: string, token: string) => {
  const router = useRouter();
  const deleteHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const reponse = (await deleteStory(id, token)) as TResponse;
    if (reponse.success) {
      revalidateAllProjects();
      router.push('/overview');
    }
  };
  return deleteHandler;
};
