// Header.js
import React, { useContext, useEffect, useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import styles from "./Header.module.css";
import axios from "axios";
import userContext from "../../AuthContext";

function Header({ OpenSidebar }) {
  const [picture, setPicture] = useState("");
  const { user } = useContext(userContext);
  console.log(user);
  useEffect(() => {
    // axios.get(`http://localhost:5000/users/30`).then((res) => {
    //   console.log(res);

    setPicture(user.data.Picture);
    console.log(`this is a ${picture}`);
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.menuIcon}>
        <BsJustify className={styles.icon} onClick={OpenSidebar} />
      </div>
      <div className={styles.headerLeft}></div>
      <div className={styles.headerRight}>
        <BsFillBellFill className={styles.icon1} />
        <img
          src={"http://localhost:5000/images/" + picture}
          alt="profile"
          height="20px"
          width="20px"
          className={styles.icon}
        />
      </div>
    </header>
  );
}

export default Header;
