import React from "react";
import style from './Users.module.css';
import { DataTable } from "../../components/dataTable/dataTable";
const Users = () => {
  return (
    <main className={style.main}>
      <div className={style.info}>
        <h1>Users</h1>
        <button>Add new User</button>
      </div>
      <DataTable />
    </main>
  )
};
export default Users;