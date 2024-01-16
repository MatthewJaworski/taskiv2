import { OptionType } from '@/components/Search/Search';
import { TLoginDto, TRegisterUserDto } from '@/types/auth';
import { TCommentRequest } from '@/types/comment';
import { CreateProjectDto, UpdateProjectDto } from '@/types/projects';
import { CreateStoryDto, UpdateStoryDto } from '@/types/story';
import { TUserToProject } from '@/types/user';
interface FetcherProps {
  url: string;
  method: string;
  body?: any;
  json?: boolean;
  token?: string;
}
const fetcher = async <T>({
  url,
  method,
  body,
  token,
  json = true,
}: FetcherProps) => {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`http://localhost:3000${url}`, {
    method,
    body: body && JSON.stringify(body),
    headers,
    cache: 'no-store',
  });

  if (!res.ok)
    throw new Error(
      `API Error: ${res.status} - ${res.statusText} - ${await res.text()}`
    );

  if (json) {
    const data = await res.json();
    return data as T;
  }
};

export const registerUser = (data: TRegisterUserDto) => {
  return fetcher({
    url: `/api/auth/register`,
    method: 'POST',
    body: data,
  });
};

export const loginUser = (data: TLoginDto) => {
  return fetcher({
    url: `/api/auth/login`,
    method: 'POST',
    body: data,
  });
};

export const getProject = (id: string, token: string) => {
  return fetcher({
    url: `/api/project/${id}`,
    method: 'GET',
    token: token,
  });
};
export const getAllUserProjects = (userId: string, token: string) => {
  return fetcher({
    url: `/api/project/user/${userId}`,
    method: 'GET',
    token: token,
  });
};
export const getAllUserStories = (userId: string, token: string) => {
  return fetcher({
    url: `/api/story/user/${userId}`,
    method: 'GET',
    token: token,
  });
};
export const getNewToken = (token: string) => {
  return fetcher({
    url: `/api/user/token`,
    method: 'POST',
    body: { token },
  });
};
export const createNewProject = (
  data: Omit<CreateProjectDto, 'userId'>,
  token: string
) => {
  return fetcher({
    url: `/api/project`,
    method: 'POST',
    body: data,
    token,
  });
};
export const updateProject = (id: string, data: UpdateProjectDto) => {
  return fetcher({
    url: `/api/project/${id}`,
    method: 'PUT',
    body: data,
  });
};
export const deleteProject = (id: string, token: string) => {
  return fetcher({
    url: `/api/project/${id}`,
    method: 'DELETE',
    token,
  });
};

export const getStory = (id: string, token: string) => {
  return fetcher({
    url: `/api/story/${id}`,
    method: 'GET',
    token,
  });
};
export const getAllProjectStories = (projectId: string, token: string) => {
  return fetcher({
    url: `/api/story/project/${projectId}`,
    method: 'GET',
    token,
  });
};
export const createStory = (data: CreateStoryDto, token: string) => {
  return fetcher({
    url: `/api/story`,
    method: 'POST',
    body: data,
    token,
  });
};
export const updateStory = (
  id: string,
  data: UpdateStoryDto,
  token: string
) => {
  return fetcher({
    url: `/api/story/${id}`,
    method: 'PUT',
    body: data,
    token,
  });
};
export const deleteStory = (id: string) => {
  return fetcher({
    url: `/api/story/${id}`,
    method: 'DELETE',
  });
};
export const filterUsersForProject = ({
  id,
  name,
  token,
}: {
  id: string;
  name: string;
  token: string;
}) => {
  return fetcher<OptionType[]>({
    url: `/api/project/${id}/users?name=${name}`,
    method: 'GET',
    token,
  });
};
export const filterUsers = ({
  name,
  token,
}: {
  name: string;
  token: string;
}) => {
  return fetcher<OptionType[]>({
    url: `/api/user?name=${name}`,
    method: 'GET',
    token,
  });
};

export const addUserToProject = ({
  data,
  token,
}: {
  data: TUserToProject;
  token: string;
}) => {
  return fetcher({
    url: `/api/user/project`,
    method: 'POST',
    token,
    body: data,
  });
};

export const removeUserFromProject = ({
  data,
  token,
}: {
  data: TUserToProject;
  token: string;
}) => {
  return fetcher({
    url: `/api/user/project`,
    method: 'DELETE',
    token,
    body: data,
  });
};
export const addComment = ({
  data,
  token,
}: {
  data: TCommentRequest;
  token: string;
}) => {
  return fetcher({
    url: `/api/comment`,
    method: 'POST',
    token,
    body: data,
  });
};
export const getAllUsers= (token: string) => {
  return fetcher({
    url: `/api/user`,
    method: 'GET',
    token,
  });
}
export const getAllUserData = (id:string,token: string) => {
  return fetcher({
    url: `/api/user/${id}`,
    method: 'GET',
    token,
  });
}
export const deleteUser = (id:string,token: string) => {
  return fetcher({
    url: `/api/user/${id}`,
    method: 'DELETE',
    token,
  });
}
export const getAllProjects = (token: string) => {
  return fetcher({
    url: `/api/project`,
    method: 'GET',
    token,
  });
}