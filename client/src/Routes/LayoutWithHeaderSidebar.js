import React from 'react';
import Header from '../layout/Header/Header';
import Sidebar from '../layout/Sidebar/Sidebar';
import "@fontsource/roboto";
import { useState } from "react";

function LayoutWithHeaderSidebar({ children }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {children}
    </div>
  )
}

export default LayoutWithHeaderSidebar;