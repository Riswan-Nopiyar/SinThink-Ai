import React, { ReactNode, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Marquee from '../components/Marquee';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const loadingBarRef = useRef<LoadingBarRef>(null);
  const location = useLocation();

  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    const timer = setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 170);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="mt-0 pt-16 bg-gradient-to-t from-white via-[#F6EAFFFF] to-[#E5DEFFFF] text-gray-800 dark:bg-gradient-to-t dark:from-[#10141B] dark:via-[#0B1016] dark:to-[#280D3D]">
      <LoadingBar color="#C300FFFF" ref={loadingBarRef} height={5} />
      <Navbar />
      <main className="mt-16">{children}</main>
      <Marquee />
      <Footer />
    </div>
  );
};

export default Layout;
