// Header.js
import React, { useContext, useEffect, useState } from "react";
import { BsFillBellFill, BsJustify } from "react-icons/bs";
import styles from "./Header.module.css";
import userContext from "../../AuthContext";
import Notification from "../../components/Notification/Notification.js";
import { socket } from "../../components/AddTransactionForm.js";

function Header({ OpenSidebar }) {
  const [picture, setPicture] = useState("");
  const { user } = useContext(userContext);
  console.log(user);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPicture(user.data.Picture);
    }, 1);
    return () => clearTimeout(timeout);
  }, [user]);

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]); // Replace with your actual notifications

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setNotifications([...notifications, data]);
    });
  });

  const handleNotificationClick = (event) => {
    event.stopPropagation();
    console.log("Notification icon clicked");
    setShowNotifications(!showNotifications);
  };

  const handlePageClick = () => {
    setShowNotifications(false);
  };
  return (
    <header className={styles.header} onClick={handlePageClick}>
      <div className={styles.menuIcon}>
        <BsJustify className={styles.icon} onClick={OpenSidebar} />
      </div>
      <div className={styles.headerLeft}></div>
      <div className={styles.headerRight}>
        <BsFillBellFill
          className={styles.icon1}
          onClick={handleNotificationClick}
        />
        <img
          src={"http://localhost:5000/images/" + picture}
          alt="profile"
          height="20px"
          width="20px"
          className={styles.icon}
        />
      </div>
      {showNotifications && (
        <Notification
          notifications={notifications}
          onClose={handleNotificationClick}
        />
      )}
    </header>
  );
}

export default Header;
