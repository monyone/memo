import { PropsWithChildren } from 'react'
import Header from '../organization/Header';
import Sidebar from '../organization/Sidebar';

const Layout: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row" style={{ minHeight: 'calc(100vh - 3rem)' }}>
        <Sidebar />
        <main className="max-w-4xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
