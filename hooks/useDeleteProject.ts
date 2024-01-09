import revalidateAllProjects from '@/actions/revalidateProjects';
import { deleteProject } from '@/lib/api';
import { TResponse } from '@/types/response';
import { useRouter } from 'next/navigation';

export const useDeleteProject = (id: string, token: string) => {
  const router = useRouter();
  const deleteHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const reponse = (await deleteProject(id, token)) as TResponse;
    if (reponse.success) {
      revalidateAllProjects();
      router.push('/overview');
    }
  };
  return deleteHandler;
};
