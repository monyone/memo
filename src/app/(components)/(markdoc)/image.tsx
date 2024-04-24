import { readFile } from 'fs/promises';
import path from 'path';

export default async function Image({ src, alt, title }: { src: string, alt?: string, title?: string }) {
  if (src.startsWith('http') || src.startsWith('https')) {
    return (
      <img src={src} alt={alt} title={title} className='my-3 mx-auto' />
    );
  }

  try {
    const data = await readFile(src);
    const ext = path.extname(src).slice(1);
    if (ext === 'svg') {
      const datauri = `data:image/${ext}+xml;utf-8,${encodeURIComponent(data.toString('utf-8'))}`;
      return (
        <img src={datauri} alt={alt} title={title} className='my-3 mx-auto' />
      );
    }

    const datauri = `data:image/${ext};base64,${data.toString('base64')}`;
    return (
      <img src={datauri} alt={alt} title={title} className='my-3 mx-auto' />
    );
  } catch(e: unknown) {
    return <img alt={alt} title={title} className='my-3 mx-auto' />
  }
};

export function ImageWithSlug(slug: string) {
  return function({ src, alt, title }: { src: string, alt?: string, title?: string}) {
    if (src.startsWith('http') || src.startsWith('https')) {
      return <Image src={src} alt={alt} title={title} />
    }

    return <Image src={path.join(slug, src)} alt={alt} title={title} />
  }
}
