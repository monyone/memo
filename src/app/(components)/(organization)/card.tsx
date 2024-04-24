import Link from 'next/link';

import React from 'react';

type Post = {
  href: string,
  title: string,
  description: string
}

export default function Card({ href, title, description }: Post) {
  return (
    <div className='inline-flex flex-col' role='presentation none'>
      <div className='flex' role='presentation none'>
        <Link href={href}>{title}</Link>
      </div>
      <div className='flex' role='presentation none'>
        <p>
          { description }
        </p>
      </div>
    </div>
  );
};
