import Link from 'next/link';

import { BLOG_TITLE } from '@/constants';

export default function Header() {
  return (
    <header className="sticky top-0 border-b z-10 bg-slate-100">
      <div className="mx-auto flex justify-between items-center h-12 scroll-pt-12">
        <div className="inline-block mx-4">
          <Link href="/">{BLOG_TITLE}</Link>
        </div>
      </div>
    </header>
  );
};
