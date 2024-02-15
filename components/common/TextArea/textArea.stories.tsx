import { Meta, StoryFn } from '@storybook/react';
import TextArea, { ITextAreaProps } from './TextArea';
import { mockTextAreaProps } from './textArea.mocks';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args: any) => (
  <TextArea {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTextAreaProps.base,
} as ITextAreaProps;
