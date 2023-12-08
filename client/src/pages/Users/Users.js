import React, { useEffect, useState } from "react";
import style from './Users.module.css';
import { DataTable } from "../../components/dataTable/dataTable";
import axios from 'axios'
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




  return (
    <main className={style.main}>
      <div className={style.UsersContainer}>
        <div className={style.info}>
          <h1>Users</h1>
          <button className={style.addUserBtn}><pre>+ Add User</pre></button>
        </div>
        <DataTable
        usersData={users}
      />
      </div>
    </main>
  )
};
export default Users;