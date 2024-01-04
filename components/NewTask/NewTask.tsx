'use client';

import { storyPriority } from '@/constants/storyPriority';
import { mapTagKeysToOptions } from '@/lib/tags';
import { mapUsersToOptions } from '@/lib/user';
import { CreateStoryDto } from '@/types/story';
import { TTagKeys } from '@/types/tag';
import { TUser } from '@/types/user';
import { FormEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

export interface NewTaskProps {
  tags?: TTagKeys[];
  users?: TUser[];
  userId: string;
  projectId: string;
}

const NewTask: React.FC<NewTaskProps> = ({
  tags,
  users,
  userId,
  projectId,
}) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestBody: CreateStoryDto = {
      description: '',
      name: '',
      tag: null,
      createdBy: userId,
      assignedTo: null,
      priority: '',
      storyPoints: 0,
      projectId,
    };
    formData.forEach((value: FormDataEntryValue, key: string) => {
      if (key !== 'storyPoints' && typeof value === 'string') {
        requestBody[key as Exclude<keyof CreateStoryDto, 'storyPoints'>] =
          value;
      }
      requestBody.storyPoints = parseInt(formData.get('storyPoints') as string);
    });
    console.log(requestBody);
  };

  const tagOptions = mapTagKeysToOptions(tags);
  const userOptions = mapUsersToOptions(users);

  const storyPoints = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];
  return (
    <>
      <p className="text-xl font-semibold mt-4 max-w-lg">Create task</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <Input
            required
            id="name"
            name="Name"
            placeholder={'Name'}
            type="text"
            title="Name"
            error={false}
          />
          <Input
            id="description"
            name="Description"
            placeholder={'Description'}
            type="text"
            title="Description"
            error={false}
          />
          <Select id="tag" name="Tag" options={tagOptions} />
          <Select id="assignedTo" name="Assign to" options={userOptions} />
          <Select id="priority" options={storyPriority} name="Story priority" />
          <Select id="storyPoints" name="Story points" options={storyPoints} />

          <Button type="submit" intent="secondary" className="w-full mt-7">
            Create task
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewTask;
