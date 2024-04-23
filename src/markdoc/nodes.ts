import { Config } from '@markdoc/markdoc';

export default {
  /* document は省略 */
  heading: {
    render: 'Heading',
    attributes: {
      id: { type: String },
      level: { type: Number, default: 1 },
    }
  },
  paragraph: {
    render: 'Paragraph',
  },
  hr: {
    render: 'Hr',
  },
  image: {
    render: 'Image',
    attributes: {
      src: { type: String, required: true },
      alt: { type: String },
      title: { type: String },
    }
  },
  fence: {
    render: 'Fence',
    attributes: {
      content: { type: String, required: true },
      language: { type: String },
      process: { type: Boolean },
    }
  },
  blockquote: {
    render: 'Blockquote',
  },
  list: {
    render: 'List',
    attributes: {
      ordered: { type: Boolean, required: true },
    }
  },
  /* item は省略 */
  table: {
    render: 'Table',
  },
  /* thead, tbody は省略 */
  td: {
    render: 'Td',
    attributes: {
      align: { type: String },
      colspan: { type: Number, default: 1 },
      rowspan: { type: Number, default: 1 },
    }
  },
  th: {
    render: 'Th',
    attributes: {
      align: { type: String }
    }
  },
  /* inline は全部の inline 要素なので省略 */
  strong: {
    render: 'Strong',
  },
  em: {
    render: 'Em',
  },
  s: {
    render: 'S',
  },
  link: {
    render: 'Link',
    attributes: {
      href: { type: String, required: true },
      title: { type: String }
    }
  },
  /* code, text, hardbraek, softbreak, error は省略 */
} as Config['nodes'];
