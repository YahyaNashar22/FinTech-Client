import React from 'react';
import Header from '../layout/Header/Header.js';
import Sidebar from '../layout/Sidebar/Sidebar';

function LayoutWithHeaderSidebar({ children }) {
  return (
    <>
      <Header />
      <div style={{display: "flex"}}>
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default LayoutWithHeaderSidebar;
