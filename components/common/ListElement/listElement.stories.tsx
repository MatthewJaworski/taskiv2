import { Meta, StoryFn } from '@storybook/react';
import ListElement, { IListElementProps } from './ListElement';
import { mockContainerProps } from './listElement.mocks';

export default {
  title: 'Components/ListElement',
  component: ListElement,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="container flex h-screen w-screen items-center justify-center bg-background p-6 text-white">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ListElement>;

const Template: StoryFn<typeof ListElement> = (args: any) => (
  <ListElement {...args} />
);

export const Story = Template.bind({});

Story.args = {
  ...mockContainerProps.base,
} as IListElementProps;
