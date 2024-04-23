import NextLink from "next/link";
import React from "react"

export default function Link({ children, href, title }: React.PropsWithChildren<{ href: string, title?: string }>) {
  return (
    <NextLink href={href} title={title} className='inline-block cursor-pointer text-blue-600 hover:text-blue-400 underline'>
      {children}
    </NextLink>
  );
};
