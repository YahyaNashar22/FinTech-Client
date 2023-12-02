import React from 'react';
import Header from '../layout/Header/Header';
import Sidebar from '../layout/Sidebar/Sidebar';
import "@fontsource/roboto";
import { useState } from "react";
import  styles from "../layout/Header/Header.module.css";


function LayoutWithHeaderSidebar({ children }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className={styles.gridContainer}>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {children}
    </div>
  )
}

export default LayoutWithHeaderSidebar;