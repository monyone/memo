import React from "react";

export default function S({ children }: React.PropsWithChildren) {
  return (
    <s>
      { children }
    </s>
  );
};
