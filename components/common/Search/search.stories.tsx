import { Meta, StoryFn } from '@storybook/react';
import Search, { ISelectProps } from './Search';
import { mockSearchProps } from './search.mocks';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="container flex h-screen w-screen items-center justify-center bg-background p-6 text-white">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = (args: any) => <Search {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSearchProps.base,
} as ISelectProps;
