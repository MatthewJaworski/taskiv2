'use client';
import { STORY_POINTS } from '@/constants/storyPoints';
import { storyPriority } from '@/constants/storyPriority';
import { useAddStory } from '@/hooks/useAddStory';
import { mapTagKeysToOptions } from '@/lib/tags';
import { mapUsersToOptions } from '@/lib/user';
import { TTagKeys } from '@/types/tag';
import { TUser } from '@/types/user';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

export interface NewTaskProps {
  tags?: TTagKeys[];
  users?: TUser[];
  userId: string;
  projectId: string;
  token: string;
}

const NewTask: React.FC<NewTaskProps> = ({
  tags,
  users,
  userId,
  projectId,
  token,
}) => {
  const { handleSubmit, ...refs } = useAddStory({ token, projectId, userId });

  const tagOptions = mapTagKeysToOptions(tags);
  const userOptions = mapUsersToOptions(users);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="text-xl font-semibold max-w-lg">Create task</p>
        <div className="flex flex-col gap-6">
          <Input
            required
            id="name"
            name="Name"
            placeholder={'Name'}
            type="text"
            title="Name"
            error={false}
            ref={refs.nameRef}
          />
          <Input
            id="description"
            name="Description"
            placeholder={'Description'}
            type="text"
            title="Description"
            error={false}
            ref={refs.descriptionRef}
          />
          <Select id="tag" name="Tag" options={tagOptions} />
          <Select id="assignedTo" name="Assign to" options={userOptions} />
          <Select
            id="priority"
            defaultValue={storyPriority[0]}
            options={storyPriority}
            name="Story priority"
          />
          <Select
            id="storyPoints"
            name="Story points"
            defaultValue={STORY_POINTS[0]}
            options={STORY_POINTS}
          />

          <Button type="submit" intent="secondary" className="w-full mt-7">
            Create task
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewTask;
