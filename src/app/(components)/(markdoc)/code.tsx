import React from "react";

export default function Code({ content }: { content: string }) {
  return (
    <code className='bg-gray-200'>
      { content }
    </code>
  );
};
