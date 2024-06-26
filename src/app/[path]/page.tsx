import fs from 'fs';
import path from 'path';
import { glob } from 'glob'
import matter from 'gray-matter';

import Markdoc from '@markdoc/markdoc';
import React from 'react';
import { Metadata } from 'next';

import nodes from '@/markdoc/nodes'
import components from '@/markdoc/components';
import { ImageWithSlug } from '../(components)/(markdoc)/image';

import { BLOG_ABSOLUTE_PATH, BLOG_CWD_PATH, BLOG_TITLE } from '@/constants';

type PageProps = {
  params: Params,
}
type Params = {
  path: string,
}

export async function generateStaticParams() {
  return (await glob(path.join(... BLOG_ABSOLUTE_PATH, `*`, `index.md`))).map((p) => {
    return { path: path.parse(path.relative(path.join(... BLOG_ABSOLUTE_PATH), p)).dir };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path: dir } = params;
  const filePath = path.join(... BLOG_ABSOLUTE_PATH, `${dir}`, `index.md`);
  const markdown = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const { data } = matter(markdown);

  return {
    title: `${BLOG_TITLE} | ${data.title}`,
    description: data.description
  }
};

export default async function Post({ params }: PageProps) {
  const { path: dir } = params;
  const filePath = path.join(... BLOG_ABSOLUTE_PATH, `${dir}`, `index.md`);
  const markdown = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const ast = Markdoc.parse(markdown);
  return Markdoc.renderers.react(
    Markdoc.transform(ast, {
      tags: {},
      nodes,
      variables: {}
    }),
    React,
    {
      components: {
        ... components,
        'Image': ImageWithSlug(path.join(... BLOG_CWD_PATH, dir))
      },
    }
  )
};
