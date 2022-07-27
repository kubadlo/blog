import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

export function Meta({ title, description }: Props) {
  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
}
