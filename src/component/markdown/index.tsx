import Link from 'next/link';
import { ReactNode, cloneElement, isValidElement, PropsWithChildren, Children } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { routeros } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import md5 from '../../utils/md5';
const textContent = (node: ReactNode): string => {
  if (node == null) { return ''; }
  if (typeof node === 'string') { return node; }
  if (typeof node === 'number') { return node.toString(10); }
  if (typeof node === 'boolean') { return node ? 'true' : 'false';}
  if (Array.isArray(node)) { return node.map((elem) => textContent(elem)).join(''); }
  return '';
};

export const Img: React.FC<{ alt?: string, src?: string }> = ({ alt, src })=> {
  return (<img src={src} alt={alt} className='my-2 mx-auto' />);
}

export const P: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className='my-2 text-base leading-6'>
      { children }
    </p>
  );
};

export const A: React.FC<PropsWithChildren<{ href?: string }>> = ({ children, href }) => {
  if (href == null) {
    return (<>{children}</>);
  } else {
    return (
      <Link href={href}>
        <a className='inline-block cursor-pointer text-blue-600 hover:text-blue-400 underline'>{children}</a>
      </Link>
    );
  }
}

export const H1: React.FC<PropsWithChildren> = ({ children }) => {
  const text = textContent(children);
  const id = text !== '' ? md5(text) : undefined;
  return (
    <>
      <h1 className='border-blue-500 border-l-4 bg-blue-50 my-4 pl-1 py-1 text-4xl' id={id}>
        { children }
      </h1>
    </>
  );
};

export const H2: React.FC<PropsWithChildren> = ({ children }) => {
  const text = textContent(children);
  const id = text !== '' ? md5(text) : undefined;
  return (
    <h2 className='border-blue-500 border-b-2 my-4 py-1 text-3xl' id={id}>
      { children }
    </h2>
  );
};

export const H3: React.FC<PropsWithChildren> = ({ children }) => {
  const text = textContent(children);
  const id = text !== '' ? md5(text) : undefined;
  return (
    <h3 className='my-4 text-xl' id={id}>
      { children }
    </h3>
  );
};

export const H4: React.FC<PropsWithChildren> = ({ children }) => {
  const text = textContent(children);
  const id = text !== '' ? md5(text) : undefined;
  return (
    <h4 className='my-4 text-lg' id={id}>
      { children }
    </h4>
  );
};

export const H5: React.FC<PropsWithChildren> = ({ children }) => {
  const text = textContent(children);
  const id = text !== '' ? md5(text) : undefined;
  return (
    <h5 className='my-4 text-lg' id={id}>
      { children }
    </h5>
  );
};

export const H6: React.FC<PropsWithChildren> = ({ children }) => {
  const text = textContent(children);
  const id = text !== '' ? md5(text) : undefined;
  return (
    <h6 className='my-4 text-lg' id={id}>
      { children }
    </h6>
  );
};

export const Ul: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className='my-2 ml-6 list-disc'>
      { children }
    </ul>
  );
};

export const Ol: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ol className='my-2 ml-6 list-decimal'>
      { children }
    </ol>
  );
};

export const Table: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <table className='my-2 border-gray-400 border-2 border-collapse'>
      { children }
    </table>
  );
};

export const Th: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <th className='border-gray-400 border-2 bg-gray-300'>
      { children }
    </th>
  );
};

export const Td: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <td className='border-gray-400 border-2 bg-gray-100'>
      { children }
    </td>
  );
};

export const Pre: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <pre className='my-2'>
      { isValidElement(children) ? cloneElement<any>(children, { block: true }) : children}
    </pre>
  );
};

export const Code: React.FC<PropsWithChildren<any>> = ({ className, children, block, ... props }) => {
  const language = /language-(\w+)/.exec(className ?? '');

  if (language) {
    return (
      <SyntaxHighlighter language={language[0]} PreTag='div' style={routeros} {... props}>
        { children }
      </SyntaxHighlighter>
    );
  } else if (block) {
    return (
      <code className='block p-2 bg-gray-200 text-gray-700'>
        { children }
      </code>
    );
  } else {
    return (
      <code className='text-yellow-600'>
        { children }
      </code>
    );
  }
};

export const BlockQuote: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <blockquote className='border-gray-400 border-l-4 my-2 pl-2 bg-gray-200 text-gray-500'>
      { children }
    </blockquote>
  );
};

export const Hr: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <hr className='border-gray-400 border-b-2 my-2'>
      { children }
    </hr>
  );
};

export const Info: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className='border-green-400 border-l-4 my-2 p-1 bg-green-200 text-gray-500'>
      { children }
    </div>
  );
};

export const Warn: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className='border-yellow-400 border-l-4 my-2 p-1 bg-yellow-200 text-gray-500'>
      { children }
    </div>
  );
};

export const Alert: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className='border-red-400 border-l-4 my-2 p-1 bg-red-200 text-gray-500'>
      { children }
    </div>
  );
};