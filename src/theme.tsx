import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
  ThemeConfig,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'system',
};

export const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'blue',
    components: ['Button'],
  }),
  withDefaultSize({
    size: 'sm',
    components: ['Button'],
  }),
  {
    fonts: {
      body: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial sans-serif, Apple Color Emoji, Segoe UI Emoji',
    },
    components: {
      FormLabel: {
        baseStyle: {
          fontWeight: 'semibold',
        },
      },
    },
  },
  { config }
);

export default { theme };
