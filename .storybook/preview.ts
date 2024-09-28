import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/index.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      themes: { light: 'light', dark: 'dark' },
      attributeName: 'data-mode',
    }),
  ],
};

// NOTE: Example of global loaders
// export const loaders = [
//   async () => ({
//     userData: await fetch('/api/user').then((res) => res.json()),
//   }),
// ];

export default preview;
