import Link from 'next/link';

import React from 'react';

type Post = {
  href: string,
  title: string,
  description: string
}

export default function Card({ href, title, description }: Post) {
  return (
    <div className='flex flex-col rounded-lg bg-slate-100' role='presentation none'>
      <Link className="block h-full" href={href}>
        <div className='flex flex-col p-4' role='presentation none'>
          <div className='flex font-semibold' role='presentation none'>
            {title}
          </div>
          <div className='flex' role='presentation none'>
            <p className='text-sm'>
              { description }
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
