import React, { useState } from "react";
import Chart from "react-apexcharts";
import styles from "../../pages/Report/Report.module.css";

const Report = () => {
  const [expenseState, setExpenseState] = useState({
    categories: ["Groceries", "Rent", "Utilities", "Entertainment", "Dining"],
    amounts: [300, 1200, 150, 100, 250],
  });

  const [pieChartState, setPieChartState] = useState({
    options: {
      colors: ["#0C2626", "#0FC2C0", " #0C2626", "#03A09D", "#015958"],
      labels: expenseState.categories,
    },      
    series: expenseState.amounts,
  });

  const [state, setState] = useState({
    options: {
      colors: ["#4DA192", "#14EBBE"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },    
    },
    series: [
      {
        name: "Income",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Outcome",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="100%"
          height="600"
        />
      </div>
      <div className={styles.lineChartContainer}>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="100%"
          height="400"
        />
        <div className={styles.pieChartContainer}>
          <Chart
            options={pieChartState.options}
            series={pieChartState.series}
            type="pie"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Report;


