import { PropsWithChildren } from "react";

import { Img } from "../markdown";
export const Image: React.FC<{ alt: string, src: string}> = ({ alt, src })=> {
  return (<Img alt={alt} src={src} />);
}

import { P } from "../markdown";
export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
  return (<P>{children}</P>)
};

import { A } from "../markdown"
export const Link: React.FC<PropsWithChildren<{href?: string}>> = ({ children, href }) => {
  return (<A href={href}>{children}</A>)
};

import { H1, H2, H3, H4, H5, H6 } from "../markdown";
export const Heading: React.FC<PropsWithChildren<{ level: number}>> = ({ children, level }) => {
  switch (level) {
    case 1: return (<H1>{children}</H1>);
    case 2: return (<H2>{children}</H2>);
    case 3: return (<H3>{children}</H3>);
    case 4: return (<H4>{children}</H4>);
    case 5: return (<H5>{children}</H5>);
    case 6: return (<H6>{children}</H6>);
  }
  return <></>
};

import { Ul, Ol } from "../markdown";
export const List: React.FC<PropsWithChildren<{ ordered: boolean }>> = ({ children, ordered }) => {
  if (ordered) {
    return (<Ol>{children}</Ol>)
  } else {
    return (<Ul>{children}</Ul>)
  }
};

import { Table as TableBlock, Th as ThBlock, Td as TdBlock } from "../markdown";
export const Table: React.FC<PropsWithChildren> = ({ children }) => {
  return (<TableBlock>{children}</TableBlock>);
};
export const Th: React.FC<PropsWithChildren> = ({ children }) => {
  return (<ThBlock>{children}</ThBlock>);
};
export const Td: React.FC<PropsWithChildren> = ({ children }) => {
  return (<TdBlock>{children}</TdBlock>);
};

import { Pre, Code } from "../markdown"
export const InlineCode: React.FC<{ content: string }> = ({ content }) => {
  return (<Code>{content}</Code>)
};
export const Fence: React.FC<{ content: string, language?: string }> = ({ content, language }) => {
  if (language == null) {
    return (<Pre><Code>{content}</Code></Pre>)
  } else {
    return (<Pre><Code className={`language-${language}`}>{content}</Code></Pre>)
  }
};

import { BlockQuote as Quote} from "../markdown";
export const Blockquote:  React.FC<PropsWithChildren> = ({ children }) => {
  return (<Quote>{children}</Quote>);
};