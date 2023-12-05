// Notification.js
import React, { useState } from 'react';
import styles from '../../components/Notification/Notification.module.css';

function Notification({ notifications }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleNotificationClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.notificationContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.notificationHeader} onClick={handleNotificationClick}>
        <span>Notifications</span>
      </div>
      {isOpen && (
        <ul className={styles.notificationList}>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notification;
