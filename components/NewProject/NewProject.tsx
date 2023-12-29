import { text } from '@/constants/en';
import { KEY_TAGS } from '@/constants/tags';
import { createNewProject } from '@/lib/api';
import { IprojectRequestBody } from '@/types/project';
import { FormEvent } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
export interface NewProjectProps {}

const NewProject: React.FC<NewProjectProps> = () => {
  const {
    newProject: { addButton, title, placeholders },
  } = text;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestBody: IprojectRequestBody = {
      backend: '',
      frontend: '',
      description: '',
      name: '',
      uxDesign: '',
      websiteDesign: '',
    };
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        requestBody[key as keyof IprojectRequestBody] = value;
      }
    });
    await createNewProject(requestBody);
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
          />
          <Input
            id="description"
            name="Description"
            placeholder={placeholders.description}
            type="text"
            title="Description"
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
