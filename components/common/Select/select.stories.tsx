import { Meta, StoryFn } from '@storybook/react';
import Select, { ISelectProps } from './Select';
import { mockSelectProps } from './select.mocks';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="container flex h-screen w-screen items-center justify-center bg-background p-6 text-white">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args: any) => <Select {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSelectProps.base,
} as ISelectProps;
