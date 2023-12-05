import React, { useState } from 'react';
import { BsFillBellFill, BsPersonCircle, BsJustify } from 'react-icons/bs';
import styles from './Header.module.css';
import Notification from '../../components/Notification/Notification.js'; // Import the Notification component

function Header({ OpenSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = ["transaction 1", "Notification 2", "transaction 3","transaction 3","transaction 3","transaction 3","transaction 3"]; // Replace with your actual notifications

  const handleNotificationClick = (event) => {
    event.stopPropagation();
    console.log('Notification icon clicked');
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
        <BsFillBellFill className={styles.icon} onClick={handleNotificationClick} />
        <BsPersonCircle className={styles.icon} />
      </div>
      {showNotifications && (
        <Notification notifications={notifications} onClose={handleNotificationClick} />
      )}
    </header>
  );
}

export default Header;
