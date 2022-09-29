import { AppProps } from 'next/app';
import Image from 'next/future/image';
import Link from 'next/link';
import NextNProgress from 'nextjs-progressbar';

import logoImage from '../assets/logo.svg';
import { theme } from '../styles';

import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImage} alt="Ignite Shop" />
        </Link>
      </Header>
      <NextNProgress
        color={theme.colors.green500.toString()}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </Container>
  );
}
