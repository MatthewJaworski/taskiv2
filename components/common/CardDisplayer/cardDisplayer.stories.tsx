import { Meta, StoryFn } from '@storybook/react';
import CardDisplayer, { ICardDisplayerProps } from './CardDisplayer';
import { mockLoaderProps } from './cardDisplayer.mock';

export default {
  title: 'Components/CardDisplayer',
  component: CardDisplayer,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="container grid h-screen w-screen grid-cols-auto-fit-l bg-background p-6 text-white">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof CardDisplayer>;

const Template: StoryFn<typeof CardDisplayer> = (args: any) => (
  <CardDisplayer {...args} />
);

export const Story = Template.bind({});

Story.args = {
  ...mockLoaderProps.story,
} as ICardDisplayerProps;

export const Project = Template.bind({});

Project.args = {
  ...mockLoaderProps.project,
} as ICardDisplayerProps;
