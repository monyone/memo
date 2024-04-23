import React from "react";

export default function Paragraph({ children }: React.PropsWithChildren) {
  return (
    <p className='my-4 text-base leading-6'>
      { children }
    </p>
  );
};
