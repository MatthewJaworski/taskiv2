export interface IprojectRequestBody {
  name: string;
  description: string;
  backend: string;
  websiteDesign: string;
  uxDesign: string;
  frontend: string;
}

export type TProjectKeys = keyof IprojectRequestBody;

export type TDatabaseProject = {
  name: string;
  description: string;
  tags: TProjectKeys[];
};
