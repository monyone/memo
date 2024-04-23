export default function Th({ children, align }: React.PropsWithChildren<{ align?: 'left' | 'right' | 'center' }>) {
  return (
    <th align={align} className='border-gray-400 border-2 bg-gray-100'>
      { children }
    </th>
  );
};
