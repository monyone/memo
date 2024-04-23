import React from "react";

export default function Blockquote({ children }: React.PropsWithChildren) {
  return (
    <blockquote className='border-gray-400 border-l-4 my-4 pl-2 bg-gray-200 text-gray-600'>
      { children }
    </blockquote>
  );
};
