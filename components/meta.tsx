import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description: string;
  type?: 'website' | 'article';
};

export function Meta({ title, description, type = 'website' }: Props) {
  const { asPath } = useRouter();
  const url = `https://jakublesko${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Browser color */}
      <meta
        name="theme-color"
        content="#FFFFFF"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#000000"
        media="(prefers-color-scheme: dark)"
      />
      {/* Facebook OpenGraph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/share_facebook.png" />
      <meta property="og:image:width" content="1800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content="Cartoon character of me" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@kubadlo" />
      <meta name="twitter:creator" content="@kubadlo" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/share_twitter.png" />
      <meta name="twitter:image:alt" content="Cartoon character of me" />
      {/* Page icons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon-128.png"
        sizes="128x128"
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon-16x16.png"
        sizes="16x16"
      />
    </Head>
  );
}
