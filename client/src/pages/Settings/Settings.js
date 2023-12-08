import React, { useState, useEffect } from "react";
import style from './Settings.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Settings = () => {
  const [data, setData] = useState({
    id: null,
    Logo: '',
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
      { link: '', platform: 'YoutTube' },
      { link: '', platform: 'LinkedIn' }
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/company/info');
        setData(response.data.data);
        console.log('Response:', response.data.data);
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
              <td>Logo:</td>
              <td>{data.Logo}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{data.Name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td style={{color: "red"}}>Fix the email in the databse</td>
              {/* <td>{data.Email}</td> */}
            </tr>
            <tr>
              <td>Description:</td>
              <td>{data.Description ? data.Description : 'There is no Description yet!'}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{data.Address ? data.Address : 'There is no Address yet!'}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{data.Phone_Number ? data.Phone_Number : 'There is no Phone Number yet!'}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{data.Website ? data.Website : 'There is no Website yet!'}</td>
            </tr>
            {data.Social_Media.map((platformData, index) => (
              <tr key={index}>
                <td>{platformData.platform}:</td>
                <td>
                  {platformData.link ? (
                    platformData.link
                  ) : (
                    `There is no ${platformData.platform} yet!`
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
};
export default Settings;