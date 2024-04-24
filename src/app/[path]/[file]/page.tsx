import fs from 'fs';
import path from 'path';
import { glob } from 'glob'
import matter from 'gray-matter';

import Markdoc from '@markdoc/markdoc';
import React from 'react';
import { Metadata } from 'next';
import { redirect } from 'next/navigation'

import nodes from '@/markdoc/nodes'
import components from '@/markdoc/components';
import { BLOG_DIR, BLOG_TITLE } from '@/constants';

type PageProps = {
  params: Params,
}
type Params = {
  path: string,
  file: string,
}

export async function generateStaticParams() {
  return (await glob(path.join(... BLOG_DIR, `*`, `*.md`))).map((p) => {
    return {
      path: path.parse(path.relative(path.join(... BLOG_DIR), p)).dir,
      file: path.basename(path.parse(path.relative(path.join(... BLOG_DIR,), p)).base, '.md') + '.html'
    };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path: dir, file: name } = params;
  const base = path.basename(name, '.html')
  const filePath = path.join(... BLOG_DIR, `${dir}`, `${base}.md`);
  const markdown = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const { data } = matter(markdown);

  return {
    title: `${BLOG_TITLE} | ${data.title}`,
    description: data.description
  }
};

export default async function Post({ params }: PageProps) {
  const { path: dir, file: name } = params;
  const base = path.basename(name, '.html')
  const filePath = path.join(... BLOG_DIR, `${dir}`, `${base}.md`);
  const markdown = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const ast = Markdoc.parse(markdown);

  const content = Markdoc.transform(ast, {
    tags: {},
    nodes,
    variables: {}
  });
  return Markdoc.renderers.react(content, React, { components })
}
