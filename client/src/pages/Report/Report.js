import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styles from "../../pages/Report/Report.module.css";
import axios from "axios"; // Import axios
import { format } from 'date-fns';


const Report = () => {
  const [expenseState, setExpenseState] = useState({
    categories: [],
    amounts: [],
  });


  const [pieChartState, setPieChartState] = useState({
    options: {
      colors: ["#0C2626", "#0FC2C0", " #0C2626", "#03A09D", "#015958"],
      labels: [], // Update labels based on fetched data
    },
    series: [], // Update series based on fetched data
  });
  const [state, setState] = useState({
    options: {
      colors: ["#4DA192", "#14EBBE"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [], // Will be populated with months
      },
    },
    series: [
      {
        name: "Income",
        data: [],
      },
      {
        name: "Expense",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the getIncomeOutcomeByMonth endpoint
        const response = await axios.get('http://localhost:5000/transactions/bymonth');

        // Extract data from the response
        const { data } = response;

        // Separate data into income and expense arrays
        const incomeData = data
          .filter((item) => item.type === 'income')
          .map((item) => item.total);

        const expenseData = data
          .filter((item) => item.type === 'expense')
          .map((item) => item.total);

        // Extract unique months from the data
        const uniqueMonths = [...new Set(data.map((item) => item.month))];

        // Map month numbers to month names
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const monthCategories = uniqueMonths.map((month) => monthNames[month - 1]);

        setState((prevState) => ({
          ...prevState,
          options: {
            ...prevState.options,
            xaxis: {
              categories: monthCategories,
            },
          },
          series: [
            { ...prevState.series[0], data: incomeData },
            { ...prevState.series[1], data: expenseData },
          ],
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/transactions/expense");

        if (!response || !Array.isArray(response.data)) {
          console.error("Invalid response format");
          return;
        }

        const categories = response.data.map((expense) => expense.category);
        const amounts = response.data.map((expense) => expense.amount);

        console.log("Categories:", categories);
        console.log("Amounts:", amounts);

        setExpenseState({ categories, amounts });

        setPieChartState((prevPieChartState) => ({
          options: {
            ...prevPieChartState.options,
            labels: categories,
          },
          series: amounts,
        }));
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    fetchExpenseData();
  }, []);

 
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

  );
};

export default Report;


