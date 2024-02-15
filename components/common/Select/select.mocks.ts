import { ISelectProps, OptionType } from './Select';

const mockOptions: OptionType[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const base: ISelectProps = {
  name: 'name',
  id: 'id',
  labelPosition: 'top',
  variant: 'primary',
  options: mockOptions,
};

export const mockSelectProps = {
  base,
};
