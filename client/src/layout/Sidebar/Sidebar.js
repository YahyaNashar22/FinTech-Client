import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";

import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import Styles from "./Sidebar.module.css";

import { FaExchangeAlt, FaSignOutAlt, FaBullseye } from "react-icons/fa";
import axios from "axios";

import userContext from "../../AuthContext";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [data, setData] = useState({
    Name: "",
    Logo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/company/info");
        const data = response.data.data;
        setData(data);
        console.log("Data Reaponse:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const logoFileName = data.Logo;
  const logoURL = `http://localhost:5000/images/${logoFileName}`;

  const [protectedGoal, setProtectedGoal] = useState();
  const { user } = useContext(userContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (user.data.Role === "accountant") {
        setProtectedGoal("/game");
      } else {
        setProtectedGoal("/goal");
      }
    }, 1);
    return () => clearTimeout(timeout);
  }, [user]);

  const logouthandler = async () => {
    try {
      await axios.post("http://localhost:5000/users/userlogout");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <aside
      id={Styles.sidebar}
      className={`${openSidebarToggle ? Styles.sidebarResponsive : ""}`}
    >
      <div className={Styles.sidebartitle}>
        <img src={logoURL} alt="Company Logo" className={Styles.logoImage} />
        <div className={Styles.sidebarbrand}>
          {data.Name}
          FINANCIAL
          {/* <img src="./home/souhad-moussa/Pictures/image.png" alt="FINANCIA" className={Styles.logo} /> */}
        </div>
        {openSidebarToggle && (
          <span
            className={`${Styles.icon} ${Styles.closeicon}`}
            onClick={OpenSidebar}
          >
            X
          </span>
        )}
      </div>

      <ul className={Styles.sidebarList}>
        <div className={Styles.firstDiv}>
          <Link to="/">
            <li className={Styles.sidebarListItem}>
              <BsGrid1X2Fill className={Styles.icon} /> Dashboard
            </li>
          </Link>
          <Link to="/transactions">
            <li className={Styles.sidebarListItem}>
              <FaExchangeAlt className={Styles.icon} /> Transactions
            </li>
          </Link>

          <Link to="/users">
            <li className={Styles.sidebarListItem}>
              <BsPeopleFill className={Styles.icon} /> Users
            </li>
          </Link>
          <Link to={protectedGoal}>
            <li className={Styles.sidebarListItem}>
              <FaBullseye className={Styles.icon} /> Goal
            </li>
          </Link>

          <Link to="/report">
            <li className={Styles.sidebarListItem}>
              <BsMenuButtonWideFill className={Styles.icon} /> Reports
            </li>
          </Link>
        </div>

        <div className={Styles.secondDiv}>
          <Link to="/settings">
            <li className={Styles.sidebarListItem}>
              <BsFillGearFill className={Styles.icon} /> Settings
            </li>
          </Link>
          <Link to="/signin">
            <li
              className={Styles.sidebarListItem}
              onClick={() => {
                logouthandler();
                localStorage.removeItem("user");
              }}
            >
              <FaSignOutAlt className={Styles.icon} />
              Log Out
            </li>
          </Link>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
