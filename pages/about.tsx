import { Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Meta } from '~/components';

export default function About() {
  return (
    <Fragment>
      <Meta title="Jakub Leško | About" description="A few words about me" />
      <Heading as="h1">About</Heading>
    </Fragment>
  );
}
