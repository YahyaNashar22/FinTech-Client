import React from "react";
import style from './Transactions.module.css';
 import EnhancedTable from '../../components/tableTransactions.js'

const Transactions = () => {
  return (
    <div className={style.Firstcontainer}>
      <div className={style.Secondcontainer}>
      < EnhancedTable/>
      </div>
    </div>
  )
};
export default Transactions;