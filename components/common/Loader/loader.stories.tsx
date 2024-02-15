import { Meta, StoryFn } from '@storybook/react';
import Loader, { LoaderProps } from './Loader';
import { mockLoaderProps } from './loader.mocks';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="container flex h-screen w-screen items-center justify-center bg-background p-6 text-white">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args: any) => <Loader {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockLoaderProps.base,
} as LoaderProps;
