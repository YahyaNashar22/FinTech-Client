import React, { useState ,useEffect} from "react";
import Chart from "react-apexcharts";
import styles from "../../pages/Report/Report.module.css";
import axios from "axios"; // Import axios


const Report = () => {
  const [expenseState, setExpenseState] = useState({
    categories: [],
    amounts: [],
  });

  const [lineChartState, setLineChartState] = useState({
    options: {
      // ... (line chart options)
    },
    series: [
      {
        name: "", // Name to be updated based on selected category
        data: [], // Data to be updated based on fetched line chart data
      },
    ],
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePieChartClick = (event, chartContext, config) => {
    if (config.dataPointIndex !== undefined) {
      const clickedCategory = pieChartState.options.labels[config.dataPointIndex];
      setSelectedCategory(clickedCategory);
    }
  };

  const [pieChartState, setPieChartState] = useState({
    options: {
      colors: ["#0C2626", "#0FC2C0", " #0C2626", "#03A09D", "#015958"],
      labels: [], // Update labels based on fetched data
    },
    series: [], // Update series based on fetched data
  });

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

  useEffect(() => {
    const fetchLineChartData = async (selectedCategory) => {
      try {
        const response = await axios.get(`http://localhost:5000/transactions/line-chart-data?category=${selectedCategory}`);

        const lineChartData = response.data.map((item) => ({
          date: item.date,
          value: item.value,
        }));

        setLineChartState({
          options: {
            ...lineChartState.options,
            xaxis: {
              categories: lineChartData.map((item) => item.date),
            },
          },
          series: [
            {
              name: selectedCategory,
              data: lineChartData.map((item) => item.value),
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching line chart data:", error);
      }
    };

    if (selectedCategory !== null) {
      fetchLineChartData(selectedCategory);
    }
  }, [selectedCategory, lineChartState.options]);

  const [incomeExpenseState, setIncomeExpenseState] = useState({
    income: [],
    expense: [],
  });

  const [state, setState] = useState({
    options: {
      colors: ["#4DA192", "#FF0000"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [], // Update with fetched data
      },
    },
    series: [
      {
        name: "Income",
        data: [], // Update with fetched data
      },
      {
        name: "Expense",
        data: [], // Update with fetched data
      },
    ],
  });

  useEffect(() => {
    const fetchIncomeExpenseData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/transactions/income");

        if (!response || !Array.isArray(response.data)) {
          console.error("Invalid response format");
          return;
        }

        const formattedData = response.data.map((item) => ({
          year: item.year,
          type: item.type === 1 ? "Income" : "Expense",
          total: item.total,
        }));

        // Separate the data into income and expense
        const incomeData = formattedData.filter((item) => item.type === "Income");
        const expenseData = formattedData.filter((item) => item.type === "Expense");

        setIncomeExpenseState({
          income: incomeData,
          expense: expenseData,
        });

        setState({
          options: {
            ...state.options,
            xaxis: {
              categories: incomeData.map((item) => item.year),
            },
          },
          series: [
            {
              name: "Income",
              data: incomeData.map((item) => item.total),
            },
            {
              name: "Expense",
              data: expenseData.map((item) => item.total),
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching income and expense data:", error);
      }
    };

    fetchIncomeExpenseData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <Chart options={state.options} series={state.series} type="bar" width="100%" height="600" />
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
          events={{
            dataPointSelection: handlePieChartClick,
          }}
        />
      </div>
      </div>
    </div>
  );
};

export default Report;


