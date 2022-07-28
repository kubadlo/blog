import { Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
import { Meta } from '~/components';

export default function BlogPost() {
  return (
    <Fragment>
      <Meta
        title="Jakub Leško | Blog"
        description="Blog about programming and technology in general"
      />
      <Heading as="h1">Article</Heading>
    </Fragment>
  );
}
