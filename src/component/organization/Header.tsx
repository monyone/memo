import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="mx-auto flex justify-between items-center h-12">
        <div className="inline-block mx-2">
          <Link href="/">
            <a>メモ置き場</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
