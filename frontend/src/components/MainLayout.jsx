// src/components/MainLayout.jsx
import ResponsiveSidebar from './ResponsiveSidebar'
import { sidebarWidth } from './ResponsiveSidebar';
//import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

import { useState, useEffect } from 'react';

const MainLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/*<Sidebar />*/}
      <ResponsiveSidebar />
      <div style={{ marginLeft: isMobile ? 0 : `${sidebarWidth}px`, width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        <Navbar />
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
// This MainLayout component serves as the main structure for the admin panel,
// integrating the Sidebar, Navbar, and Footer components.