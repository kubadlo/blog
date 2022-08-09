import { Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
import Meta from '~/components/meta';

export default function Home() {
  return (
    <Fragment>
      <Meta
        title="Jakub Leško"
        description="Blog about programming and technology in general"
      />
      <Heading as="h1">Home</Heading>
    </Fragment>
  );
}
