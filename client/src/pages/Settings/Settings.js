import React, { useState, useEffect } from 'react';
import style from './Settings.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Settings = () => {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    Description: '',
    Address: '',
    Phone_Number: null,
    Website: '',
    Social_Media: [
      { link: '', platform: 'Facebook' },
      { link: '', platform: 'Instagram' },
      { link: '', platform: 'TikTok' },
      { link: '', platform: 'X' },
      { link: '', platform: 'YouTube' },
      { link: '', platform: 'LinkedIn' },
    ],
    Logo: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/company/info');
        const data = response.data.data
        setData(data);
        console.log('Data Reaponse:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
              <td>{data.Name || '*The is no Name yet!*'}</td>
            </tr>
            {/* <tr>
              <td>Email:</td>
              <td>{data.Email}</td>
            </tr> */}
            <tr>
              <td>Description:</td>
              <td>{data.Description || '*There is no Description yet!*'}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{data.Address || '*There is no Address yet!*'}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{data.Phone_Number || 'There is no Phone Number yet*!'}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{data.Website || '*There is no Website yet!*'}</td>
            </tr>
            {/* {data.Social_Media.map((platformData, index) => (
              <tr key={index}>
                <td>{platformData.platform}:</td>
                <td>{platformData.link || `*There is no ${platformData.platform} yet!*`}</td>
              </tr>
            ))} */}
            {data.Social_Media && data.Social_Media.map((platformData, index) => (
              <tr key={index}>
                <td>{platformData.platform}:</td>
                <td>{platformData.link || `*There is no ${platformData.platform} yet!*`}</td>
              </tr>
            ))}
            <tr>
              <td>Logo:</td>
              <td>{data.Logo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Settings;
