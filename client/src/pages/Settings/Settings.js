import React from "react";
import style from './Settings.module.css';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1 className={style.title}>Company Information</h1>
        <Link to="/editcompany">
          <button className={style.editInfoButton}>Edit Info</button>
        </Link>
      </div>




      <div className={style.tableContainer}>
        <table className={style.dataTable}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Company Name</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>Company Address</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>Company Description</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>Phone Number</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>Email Address</td>
            </tr>
            <tr>
              <td>Instagram:</td>
              <td>Instagram Page</td>
            </tr>
            <tr>
              <td>Facebook:</td>
              <td>Facebook Page</td>
            </tr>
            <tr>
              <td>Twitter/X:</td>
              <td>Company Twitter</td>
            </tr>
            <tr>
              <td>Youtube:</td>
              <td>Youtube Channel</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>Company Website</td>
            </tr>
            <tr>
              <td>Logo:</td>
              <td>Company Logo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
};
export default Settings;