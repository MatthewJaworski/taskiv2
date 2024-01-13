'use client';
import revalidateStory from '@/actions/revalidateStory';
import Container from '@/components/Container/Container';
import SearchUser from '@/components/SearchUser/SearchUser';
import { OptionType } from '@/components/Select/Select';
import { filterUsersForProject, updateStory } from '@/lib/api';
import { TResponse } from '@/types/response';
import { TStory } from '@/types/story';

interface IAssignedToProps {
  data: TStory;
  projectId: string;
  token: string;
}

export const AssignedTo = ({ projectId, token, data }: IAssignedToProps) => {
  const { assignedTo } = data;

  const assignedUser = {
    value: assignedTo?.id,
    label: assignedTo?.name,
  };
  const promiseOptions = (inputValue: string) => {
    return filterUsersForProject({
      name: inputValue,
      token,
      id: projectId,
    }).then((result) => result || []);
  };
  const onChangeHandler = async (option: OptionType | null) => {
    if (option) {
      const newStory = {
        ...data,
        assignedTo: { id: option.value as string, name: option.label },
      };
      const result = (await updateStory(data.id, newStory, token)) as TResponse;

      if (result.success) {
        await revalidateStory();
      }
    }
  };

  return (
    <Container className="mt-4">
      <SearchUser
        id="assignedTo"
        promiseOptions={promiseOptions}
        defaultValue={assignedUser}
        name="Assigned To"
        onChange={onChangeHandler}
      />
    </Container>
  );
};
