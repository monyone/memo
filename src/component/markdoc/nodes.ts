import { Image, Paragraph, Link, Heading, List, InlineCode, Fence, Blockquote, Table, Th, Td } from "./element";

export const image = {
  render: Image,
  attributes: {
    alt: { type: String },
    src: { type: String },
  }
};

export const paragraph = {
  render: Paragraph
};

export const link = {
  render: Link,
  attributes: {
    href: { type: String },
    title: { type: String }
  }
}

export const heading = {
  render: Heading,
  attributes: {
    id: { type: String },
    level: { type: Number }
  }
};

export const list = {
  render: List,
  attributes: {
    ordered: { type: Boolean }
  }
}

export const table = {
  render: Table
}

export const th = {
  render: Th,
  attributes: {
    align: { type: String },
    width: { type: Number },
  }
}

export const td = {
  render: Td,
  attributes: {
    align: { type: String },
    rowspan: { type: Number },
    colspan: { type: Number },
  }
} 

export const code = {
  render: InlineCode,
  attributes: {
    content: { type: String },
  }
}

export const fence = {
  render: Fence,
  attributes: {
    content: { type: String },
    language: { type: String },
    process: { type: String },
  }
}

export const blockquote = {
  render: Blockquote
}
