import Link from 'next/link';

import React from 'react';

type Post = {
  href: string,
  title: string,
  description: string,
  created: string,
  modified: string,
}

export default function Card({ href, title, description, created, modified }: Post) {
  return (
    <div className='flex flex-col rounded-lg bg-slate-100' role='presentation none'>
      <Link className="block h-full" href={href}>
        <div className='flex flex-col p-4 h-full' role='presentation none'>
          <div className='flex flex-col grow' role='presentation none'>
            <div className='flex font-semibold mb-2' role='presentation none'>
              {title}
            </div>
            <div className='flex grow my-2' role='presentation none'>
              <p className='text-sm'>
                { description }
              </p>
            </div>
          </div>
          <div className='flex flex-row-reverse mt-4'>
            <div className='flex flex-col text-xs ml-full'>
              <div className='inline-block'>
                { created } 作成
              </div>
              <div className='inline-block'>
                { modified } 編集
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
