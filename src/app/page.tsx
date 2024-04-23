import { BLOG_DIR } from '@/constants';
import fs from 'fs';
import { glob } from 'glob';
import Link from 'next/link';
import path from 'path';

export default async function Home() {
  const pages = (await glob(path.join(... BLOG_DIR, `*`, `index.md`))).map((p) => path.relative(path.join(... BLOG_DIR), p));

  return (
    <main>
      { pages.map((p) => <Link href={`/${path.dirname(p)}/`}>{p}</Link>) }
    </main>
  );
}
