import type { Preview } from '@storybook/react';

const BREAKPOINTS = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customviewports = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([key, val], index) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(index + 5) * 10}vh`,
        },
      },
    ];
  })
);

const preview: Preview = {
  parameters: {
    viewport: {
      vieports: customviewports,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
