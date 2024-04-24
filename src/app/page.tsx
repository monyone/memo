import { BLOG_DIR } from '@/constants';
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import matter from 'gray-matter';
import { execSync } from 'child_process';
import dayjs from 'dayjs';

import Card from '@/app/(components)/(organization)/card';

export default async function Home() {
  const pages = (await glob(path.join(... BLOG_DIR, `*`, `index.md`))).map((p) => {
      const { data } = matter(fs.readFileSync(p));
      const relative = path.relative(path.join(... BLOG_DIR), p);
      const created = dayjs(execSync(`git log --follow --format=%cI --reverse --date default ${p}`).toString('utf-8').trim().split('\n')[0]);
      const modified = dayjs(execSync(`git log --follow --format=%cI --date default ${p}`).toString('utf-8').trim().split('\n')[0]);

      return {
        path: p,
        href: path.dirname(relative) + path.sep,
        title: data.title as string,
        description: data.description as string,
        created: created.format('YYYY/MM/DD'),
        modified: modified.format('YYYY/MM/DD'),
        hidden: data.hidden!!,
        color: data.color,
        image: data.image,
        order: created.unix()
      }
    }).filter(({ hidden }) => !hidden);
  pages.sort((a, b) => a.order - b.order);

  return (
    <div className='px-4'>
      <div className='grid grid-cols-3 gap-4'>
        { pages.map((page) => <Card {... page } key={page.path} />) }
      </div>
    </div>
  );
}
