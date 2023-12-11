import React, { useEffect, useState } from "react";
import style from './Users.module.css';
import { DataTable } from "../../components/dataTable/dataTable";
import axios from 'axios'
import { Link } from 'react-router-dom';
const Users = () => {

  let [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:5000/users/getAll")
      setUsers(response.data)
    } catch (err) {
      console.log("Error fetching users:", err)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log("anwar", users)



  return (
    <main className={style.main}>
      <div className={style.UsersContainer}>
        <div className={style.info}>
          <h1>Users</h1>
          <Link to="/signup">

            <button className={style.addUserBtn}><pre>+ Add User</pre></button>
          </Link>
        </div>
        <DataTable
          usersData={users}
        />
      </div>
    </main>
  )
};
export default Users;