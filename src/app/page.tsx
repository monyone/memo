import { BLOG_DIR } from '@/constants';
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import matter from 'gray-matter';

import Card from '@/app/(components)/(organization)/card';

export default async function Home() {
  const pages = (await glob(path.join(... BLOG_DIR, `*`, `index.md`))).map((p) => {
      const { data } = matter(fs.readFileSync(p));
      const relative = path.relative(path.join(... BLOG_DIR), p);
      return {
        href: path.join(path.dirname(relative), 'index.html'),
        title: data.title as string,
        description: data.description as string
      }
    });

  return (
    <div className='px-4'>
      <div className='grid grid-cols-3 gap-4'>
        { pages.map((page) => <Card {... page } />) }
      </div>
    </div>
  );
}
