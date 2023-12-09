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

  // const [chartData, setChartData] = useState(null);
  // console.log('chartData:', chartData);

  // const options = {
  //   xaxis: {
  //     categories: chartData ? [...new Set(chartData.map(item => item.month))] : [],
  //   },
  // };
  
  // const series = chartData
  //   ? chartData.reduce((result, item) => {
  //       const index = result.findIndex((el) => el.name === item.type);
  //       if (index === -1) {
  //         result.push({ name: item.type, data: [item.total] });
  //       } else {
  //         result[index].data.push(item.total);
  //       }
  //       return result;
  //     }, [])
  //   : [];
  


  // // Use this endpoint in your React component
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/transactions/bymonth");
  //       setChartData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [chartData, setChartData] = useState({
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
        setChartData(data);
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

  // const [state, setState] = useState({
  //   options: {
  //     colors: ["#4DA192", "#14EBBE"],
  //     chart: {
  //       id: "basic-bar",
  //     },
  //     xaxis: {
  //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //     },    
  //   },
  //   series: [
  //     {
  //       name: "Income",
  //       data: [30, 40, 45, 50, 49, 60, 70, 91],
  //     },
  //     {
  //       name: "Outcome",
  //       data: [3, 60, 35, 80, 49, 70, 20, 81],
  //     },
  //   ],
  // });

  return (
     <div className={styles.container}>
      <div className={styles.chartContainer}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
          height="600"
        />
      </div>
      {/* <div className={styles.lineChartContainer}>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="100%"
          height="400"
        /> */}

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


