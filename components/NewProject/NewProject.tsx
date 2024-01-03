'use client';
import revalidateAllProjects from '@/actions/revalidateProjects';
import { text } from '@/constants/en';
import { KEY_TAGS } from '@/constants/tags';
import { createNewProject } from '@/lib/api';
import { IprojectRequestBody } from '@/types/project';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export interface NewProjectProps {
  token: string;
  userId: string;
}

const NewProject: React.FC<NewProjectProps> = ({ token, userId }) => {
  const {
    newProject: { addButton, title, placeholders },
  } = text;
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestBody: IprojectRequestBody = {
      description: '',
      name: '',
      tags: [],
      userId: userId,
    };
    formData.forEach((value, key) => {
      if (key === 'description' || key === 'name') {
        requestBody[key as Exclude<keyof IprojectRequestBody, 'tags'>] =
          value as string;
      } else {
        const foundTag = KEY_TAGS.find((tag) => tag.key === key);
        if (foundTag) {
          requestBody.tags.push(foundTag.name);
        }
      }
    });
    const response = await createNewProject(requestBody, token);

    if (response.success) {
      revalidateAllProjects();
      router.push('/overview ');
    }
  };

  return (
    <>
      <h1 className="text-5xl font-semibold max-w-lg">{title}</h1>
      <form className="w-full mt-12" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <Input
            required
            id="name"
            name="Name"
            placeholder={placeholders.name}
            type="text"
            title="Name"
            error={false}
          />
          <Input
            id="description"
            name="Description"
            placeholder={placeholders.description}
            type="text"
            title="Description"
            error={false}
          />
        </div>
        <div className="mt-6">
          <p className="font-semibold text-sm mb-1">Tags</p>
          <div className="grid grid-cols-2 gap-4">
            {KEY_TAGS.map((tag) => {
              return (
                <Input
                  key={tag.key}
                  id={tag.key}
                  name={tag.name}
                  labelPosition="right"
                  type="checkbox"
                  title={tag.name}
                />
              );
            })}
          </div>
        </div>
        <Button type="submit" intent="secondary" className="w-full mt-7">
          {addButton}
        </Button>
      </form>
    </>
  );
};
export default NewProject;
