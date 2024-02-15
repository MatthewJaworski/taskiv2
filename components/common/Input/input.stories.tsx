import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';
import { mockInputProps } from './input.mocks';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: any) => <Input {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockInputProps.base,
} as InputProps;
