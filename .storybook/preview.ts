import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';

initialize();

import '../src/index.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      themes: { light: 'light', dark: 'dark' },
      attributeName: 'data-mode',
    }),
  ],
  loaders: [mswLoader],
};

// NOTE: Example of global loaders
// export const loaders = [
//   async () => ({
//     userData: await fetch('/api/user').then((res) => res.json()),
//   }),
// ];

export default preview;
