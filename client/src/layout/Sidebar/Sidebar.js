import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs';
import Styles from './Sidebar.module.css';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaExchangeAlt, FaSignOutAlt, FaBullseye } from 'react-icons/fa';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id={Styles.sidebar} className={`${openSidebarToggle ? Styles.sidebarResponsive : ''}`}>
      <div className={Styles.sidebartitle}>
        <div className={Styles.sidebarbrand}>
        FINANCIAL
        {/* <img src="./home/souhad-moussa/Pictures/image.png" alt="FINANCIA" className={Styles.logo} /> */}
        </div>
        {openSidebarToggle && (
          <span className={`${Styles.icon} ${Styles.closeicon}`} onClick={OpenSidebar}>
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
        <Link to="/goal">
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

          <li className={Styles.sidebarListItem}>
              <FaSignOutAlt className={Styles.icon} /> Log Out
              </li>

            </Link>
          </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
