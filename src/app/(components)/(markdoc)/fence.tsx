import SyntaxHighlighter from 'react-syntax-highlighter';
import { routeros } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Fence({ content, language, process }: { content: string, language: string, process: boolean }) {
  if (language){
    return (
      <SyntaxHighlighter language={language} PreTag='div' style={routeros} children={content} className="my-4" />
    );
  }

  return (
    <code className='block my-4 bg-gray-200 text-gray-700'>
      { content }
    </code>
  );
};
