/** @type {import('next').NextConfig} */

import path from 'path';

import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import withMDXWrapper from '@next/mdx';
const withMDX = withMDXWrapper({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

import withMarkdocWrapper from '@markdoc/next.js';
const withMarkdoc = withMarkdocWrapper({
  schemaPath: path.join('./', 'src', 'component', 'markdoc')
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/memo',
  assetPrefix: '/memo'
}

export default withMarkdoc(withMDX({
  ... nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}));
