export default function Image({ src, alt, title }: { src: string, alt?: string, title?: string}) {
  return (
    <img src={src} alt={alt} title={title} className='my-3 mx-auto' />
  );
};
