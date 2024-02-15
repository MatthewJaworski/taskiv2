'use client';
import revalidateStoriesForProject from '@/actions/revalidateStoriesForProject';
import { addUserToProject, filterUsers } from '@/lib/api';
import { TProject } from '@/types/projects';
import { TResponse } from '@/types/response';
import { TUserToProject } from '@/types/user';
import { useState } from 'react';
import Container from '../../../common/Container/Container';
import { OptionType } from '../../../common/Search/Search';
import SearchUser from '../../../custom/SearchUser/SearchUser';

interface IAddUserProps {
  token: string;
  projectData: TProject;
}

const AddUser = ({ token, projectData }: IAddUserProps) => {
  const [error, setError] = useState<boolean>(false);

  const promiseOptions = (inputValue: string) => {
    return filterUsers({
      name: inputValue,
      token,
    }).then((result) => result || []);
  };
  const onChange = async (option: OptionType | null) => {
    if (option) {
      setError(false);
      const optionInProject = projectData.users.find(
        (user) => user.id === option.value
      );
      if (optionInProject) {
        setError(true);
        return;
      }
      const userToProject = {
        projectId: projectData.id,
        userId: option.value,
      } as TUserToProject;
      const result = (await addUserToProject({
        data: userToProject,
        token,
      })) as TResponse;
      if (result.success) {
        await revalidateStoriesForProject();
      } else {
        setError(true);
      }
    }
  };
  return (
    <Container className="mt-4">
      <SearchUser
        id="addUser"
        promiseOptions={promiseOptions}
        name="Add user"
        onChange={onChange}
        error={error}
        errorMessage="User is already in project"
      />
    </Container>
  );
};

export default AddUser;
