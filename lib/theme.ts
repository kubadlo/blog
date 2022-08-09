import { extendTheme, type ChakraTheme } from '@chakra-ui/react';

const global: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true
  }
};

const fonts: Partial<ChakraTheme> = {
  fonts: {
    heading: '"Fira Sans", -apple-system, system-ui, sans-serif',
    body: '"Fira Sans", -apple-system, system-ui, sans-serif',
    mono: '"Fira Code", monospace'
  }
};

export default extendTheme(global, fonts);
