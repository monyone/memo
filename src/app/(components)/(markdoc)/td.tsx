export default function Td({ children, align, colspan, rowspan }: React.PropsWithChildren<{ align?: 'left' | 'right' | 'center', colspan: number, rowspan: number }>) {
  return (
    <td colSpan={colspan} rowSpan={rowspan} align={align} className='border-gray-400 border-2 bg-gray-100'>
      { children }
    </td>
  );
};
