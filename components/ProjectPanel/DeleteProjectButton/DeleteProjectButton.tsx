'use client';
import Button from '@/components/Button/Button';
import { useDeleteProject } from '@/hooks/useDeleteProject';

const DeleteProjectButton = ({ id, token }: { id: string; token: string }) => {
  return (
    <Button
      onClick={() => useDeleteProject(id, token)}
      className="mt-4 w-full"
      intent="text"
    >
      Delete project
    </Button>
  );
};

export default DeleteProjectButton;
