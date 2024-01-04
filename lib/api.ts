import { TLoginDto, TRegisterUserDto } from '@/types/auth';
import { CreateProjectDto, UpdateProjectDto } from '@/types/projects';
import { CreateStoryDto, UpdateStoryDto } from '@/types/story';
interface FetcherProps {
  url: string;
  method: string;
  body?: any;
  json?: boolean;
  token?: string;
}
const fetcher = async ({
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
    return data;
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

export const getProject = (id: string,token:string) => {
  return fetcher({
    url: `/api/project/${id}`,
    method: 'GET',
    token:token
  });
};
export const getAllUserProjects = (userId: string, token: string) => {
  return fetcher({
    url: `/api/project/user/${userId}`,
    method: 'GET',
    token: token,
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

export const getStory = (id: string) => {
  return fetcher({
    url: `/api/story/${id}`,
    method: 'GET',
  });
};
export const getAllProjectStories = (projectId: string,token:string) => {
  return fetcher({
    url: `/api/story/project/${projectId}`,
    method: 'GET',
    token
  });
};
export const createStory = (data: CreateStoryDto) => {
  return fetcher({
    url: `/api/story`,
    method: 'POST',
    body: data,
  });
};
export const updateStory = (id: string, data: UpdateStoryDto) => {
  return fetcher({
    url: `/api/story/${id}`,
    method: 'PUT',
    body: data,
  });
};
export const deleteStory = (id: string) => {
  return fetcher({
    url: `/api/story/${id}`,
    method: 'DELETE',
  });
};
