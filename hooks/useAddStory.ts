import revalidateStoriesForProject from '@/actions/revalidateStoriesForProject';
import { createStory } from '@/lib/api';
import { CreateStoryDto, TStoryPriority } from '@/types/story';
import { FormEvent, useRef } from 'react';

interface IUseAddStory {
  userId: string;
  projectId: string;
  token: string;
}
export const useAddStory = ({ userId, projectId, token }: IUseAddStory) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestBody: CreateStoryDto = {
      description: '',
      name: '',
      tag: null,
      createdBy: userId,
      assignedTo: null,
      priority: 0,
      storyPoints: 0,
      projectId,
    };
    formData.forEach((value: FormDataEntryValue, key: string) => {
      if (key !== 'storyPoints' && typeof value === 'string') {
        requestBody[
          key as Exclude<keyof CreateStoryDto, 'storyPoints' | 'priority'>
        ] = value;
      }
      requestBody.storyPoints = parseInt(formData.get('storyPoints') as string);
      requestBody.priority = parseInt(
        formData.get('priority') as string
      ) as TStoryPriority;
    });
    const response = await createStory(requestBody, token);
    if (response.success) {
      revalidateStoriesForProject();
      if (nameRef.current) nameRef.current.value = '';
      if (descriptionRef.current) descriptionRef.current.value = '';
    }
  };

  return {
    handleSubmit,
    nameRef,
    descriptionRef,
  };
};
