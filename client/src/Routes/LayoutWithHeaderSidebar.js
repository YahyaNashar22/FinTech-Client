import React from "react";
import Header from "../layout/Header/Header";
import Sidebar from "../layout/Sidebar/Sidebar";
import "@fontsource/roboto";
import { useState } from "react";
import styles from "../layout/Header/Header.module.css";

function LayoutWithHeaderSidebar({ children }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <div style={{ overflowY: "auto", flex: "1" }}>
        <Header OpenSidebar={OpenSidebar} />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LayoutWithHeaderSidebar;
