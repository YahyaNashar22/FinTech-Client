import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import styles from "../../pages/Report/Report.module.css";
import axios from "axios"; // Import axios


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


  const [BarchartData, setBarChartData] = useState({
    options: {
      colors: ["#4DA192", "#14EBBE"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: 'Income',
        data: [],
      },
      {
        name: 'Expense',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/transactions/bymonth');
        const data = response.data;

        console.log('Received Data:', data);

        // Update state with fetched data
        setBarChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);




  const [LinechartData, setLineChartData] = useState({
    options: {
      colors: ["#4DA192", "#14EBBE"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: 'Income',
        data: [],
      },
      {
        name: 'Expense',
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/transactions/LineChart');
        const data = response.data;

        console.log('Received Data:', data);

        // Update state with fetched data
        setLineChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
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
          options={BarchartData.options}
          series={BarchartData.series}
          type="bar"
          width="100%"
          height="500"
        />
      </div>
      <div className={styles.lineChartContainer}>
        <Chart
          options={LinechartData.options}
          series={LinechartData.series}
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
            height="400"


          />
        </div>
      </div>
    </div>


  );
};

export default Report;

