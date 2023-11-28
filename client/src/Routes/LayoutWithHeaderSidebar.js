import React from 'react';
import Header from '../layout/Header/Header';
import Sidebar from '../layout/Sidebar/Sidebar';

function LayoutWithHeaderSidebar({ children }) {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default LayoutWithHeaderSidebar;
