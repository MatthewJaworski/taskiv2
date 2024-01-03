import { text } from '@/constants/en';
import { TKeyName } from './utility';
const {
  newProject: { tags },
} = text;

export type TTags = typeof tags;
export type TTag = TKeyName<TTags>;
export type TTagKeys =  TTag['name'];