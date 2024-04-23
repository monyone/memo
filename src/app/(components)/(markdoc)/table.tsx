export default function Table({ children }: React.PropsWithChildren) {
  return (
    <table className='my-4 border-gray-400 border-2 border-collapse'>
      { children }
    </table>
  );
};
