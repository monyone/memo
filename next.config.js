/** @type {import('next').NextConfig} */

const path = require('path');

const withMarkdoc = require('@markdoc/next.js')({
  schemaPath: path.join('./', 'src', 'component', 'markdoc')
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/memo',
  assetPrefix: '/memo'
}

module.exports =  withMarkdoc({
  ... nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md'],
});
