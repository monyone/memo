import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { MDXProvider } from '@mdx-js/react'
import { P, A, H1, H2, H3,H4, H5, H6, Ul, Ol, Pre, Code, BlockQuote, Td, Th, Table, Hr, Img } from '../component/markdown'
const markdownCompoents = {
  img: Img,
  h1: H1,
  h2: H2,
  h3: H3,
  H4: H4,
  H5: H5,
  H6: H6,
  p: P,
  a: A,
  pre: Pre,
  code: Code,
  blockquote: BlockQuote,
  ul: Ul,
  ol: Ol,
  table: Table,
  td: Td,
  th: Th,
  hr: Hr
};

import Layout from '../component/layout'
import Head from 'next/head';

function Application({ Component, pageProps }: AppProps) {
  const markdownTitle = pageProps.markdoc?.frontmatter?.title as (string | undefined);
  const markdownDescription = pageProps.markdoc?.frontmatter?.description as (string | undefined);

  return (
    <Layout>
      <Head>
        <title>{ markdownTitle ?? 'メモ置き場'}</title>
        <meta name="description" content={markdownDescription ?? '雑多なメモ置き場'}/>
      </Head>
      <MDXProvider components={markdownCompoents}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default Application
