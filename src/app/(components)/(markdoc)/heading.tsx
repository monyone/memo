import React from "react";
import Link from "next/link";

import md5 from '@/utils/md5';
const textContent = (node: React.ReactNode): string => {
  if (node == null) { return ''; }
  if (typeof node === 'string') { return node; }
  if (typeof node === 'number') { return node.toString(10); }
  if (typeof node === 'boolean') { return node ? 'true' : 'false';}
  if (Array.isArray(node)) { return node.map((elem) => textContent(elem)).join(''); }
  return '';
};

export default function Heading({ level, id, children }: React.PropsWithChildren<{ level: number, id?: string }>){
  id ??= md5(textContent(children));
  const anchor = <Link className="mx-2 invisible group-hover:visible blue" href={`#${id}`}>#</Link>

  switch (level) {
    case 1: return (<div className="group my-4 pl-1 py-1 text-4xl"><h1 id={id} className="inline-block border-blue-500 border-l-4 bg-blue-50">{children}</h1>{anchor}</div>);
    case 2: return (<div className="group my-4 py-1 text-3xl"><h2 id={id} className="inline-block  border-blue-500 border-b-2 ">{children}</h2>{anchor}</div>);
    case 3: return (<div className="group my-4 text-xl"><h3 id={id} className="inline-block  my-4 text-xl">{children}</h3>{anchor}</div>);
    case 4: return (<div className="group my-4 text-lg"><h4 id={id} className="inline-block  my-4 text-lg">{children}</h4>{anchor}</div>);
    case 5: return (<div className="group my-4 text-lg"><h5 id={id} className="inline-block  my-4 text-lg">{children}</h5>{anchor}</div>);
    case 6: return (<div className="group my-4 text-lg"><h6 id={id} className="inline-block  my-4 text-lg">{children}</h6>{anchor}</div>);
  }
  return <></>
};
