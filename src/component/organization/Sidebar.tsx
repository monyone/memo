import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex-none w-64">
      <div className="sticky top-12 border-r border-b bg-gray-100 overflow-y-scroll" style={{ height: 'calc(100vh - 3rem)'}}>
        <div className="m-2">
          <div className="my-2"><Link href={'/building-doc/how-to-setup'}><a>このドキュメントを作るまで</a></Link></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
