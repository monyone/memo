import fs from 'fs';
import path from 'path';
import { glob } from 'glob'

import Markdoc from '@markdoc/markdoc';
import React from 'react';

import nodes from '@/markdoc/nodes'
import components from '@/markdoc/components';
import { BLOG_DIR } from '@/constants';

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
      file: path.basename(path.parse(path.relative(path.join(... BLOG_DIR,), p)).base, '.md')
    };
  });
}

export default async function Post({ params }: PageProps) {
  const { path: dir, file: name } = params;
  const filePath = path.join(... BLOG_DIR, `${dir}`, `${name}.md`);
  const markdown = fs.readFileSync(filePath, { encoding: 'utf-8' });

  const ast = Markdoc.parse(markdown);

  const content = Markdoc.transform(ast, {
    tags: {},
    nodes,
    variables: {}
  });
  return Markdoc.renderers.react(content, React, { components })
}
