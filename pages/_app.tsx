import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/fira-code/latin.css';
import '@fontsource/fira-sans/latin-ext.css';
import '@fontsource/fira-sans/latin.css';
import type { AppProps } from 'next/app';
import theme from '~/lib/theme';

export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
