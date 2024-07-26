import { Outlet } from 'react-router-dom';
import SideBar from './components/ui/SideBar';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
