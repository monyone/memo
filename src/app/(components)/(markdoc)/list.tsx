import React from "react";

export default function List({ children, ordered }: React.PropsWithChildren<{ ordered: boolean }>) {
  if (ordered) {
    return (
      <ol className='my-4 ml-6 list-decimal'>
        {children}
      </ol>
    );
  } else {
    return (
      <ul className='my-4 ml-6 list-disc'>
        {children}
      </ul>
    );
  }
};
