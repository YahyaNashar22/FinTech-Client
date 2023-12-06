import React from "react";
import style from './Users.module.css';
import { DataTable } from "../../components/dataTable/dataTable";
const Users = () => {
  return (
    <main className={style.main}>
      <div className={style.UsersContainer}>
        <div className={style.info}>
          <h1>Users</h1>
          <button className={style.addUserBtn}><pre>+ Add User</pre></button>
        </div>
        <DataTable />
      </div>
    </main>
  )
};
export default Users;