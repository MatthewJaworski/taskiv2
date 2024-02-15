import { OptionType } from '@/components/common/Select/Select';

export const storyPriority: OptionType[] = [
  { value: 1, label: 'Low' },
  { value: 2, label: 'Medium' },
  { value: 3, label: 'High' },
] as const;
