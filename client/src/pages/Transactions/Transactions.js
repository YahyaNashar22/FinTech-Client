import React from "react";
import style from './Transactions.module.css';
 import EnhancedTable from '../../components/tableTransactions.js'

const Transactions = () => {
  return (
    <div className={style.mainDiv}>
     < EnhancedTable />
    </div>
  )
};
export default Transactions;