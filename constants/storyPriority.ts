import { OptionType } from '@/components/Select/Select';

export const storyPriority: OptionType[] = [
  { value: '1', label: 'Low' },
  { value: '2', label: 'Medium' },
  { value: '3', label: 'High' },
] as const;

export type TStoryPriority = '1' | '2' | '3';
