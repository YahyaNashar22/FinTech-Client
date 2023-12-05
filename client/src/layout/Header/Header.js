// Header.js
import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import  styles from "./Header.module.css";

function Header({OpenSidebar}) {
  return (
    <header className={styles.header}>
        <div className={styles.menuIcon}>
            <BsJustify className={styles.icon} onClick={OpenSidebar}/>
        </div>
        <div className={styles.headerLeft}>
        </div>
        <div className={ styles.headerRight}>
            <BsFillBellFill className={`${styles.NotificationIcon} ${styles.icon}`}/>
            <BsPersonCircle className={`${styles.UserIcon} ${styles.icon}`}/>
        </div>
    </header>
  )
}

export default Header;