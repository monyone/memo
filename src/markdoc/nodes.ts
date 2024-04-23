
import md5 from '@/utils/md5';
import { Config, Node, Tag, RenderableTreeNode, nodes } from '@markdoc/markdoc';

export default {
  heading: {
    render: 'Heading',
    attributes: {
      id: { type: String },
      level: { type: Number, default: 1 },
    }
  }
} as Config['nodes'];
