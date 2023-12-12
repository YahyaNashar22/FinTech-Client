import './MonthlyBarChart.css'; // Create a new CSS file for styling
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const WeeklyBarChart = () => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [barChartData, setBarChartData] = useState({
    options: {
      colors: ["#4DA192"],
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
    ],
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/transactions/byweek');
        const data = response.data;

        // Update state with fetched data
        setBarChartData({
          options: {
            colors: ["#4DA192"],
            chart: { id: "basic-bar" },
            xaxis: {
              categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Update with days of the week
            },
          },
          series: [
            {
              name: 'Income',
              data: data.series[0].data, // Use the income data from the fetched response
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="chart">
      <ReactApexChart options={barChartData.options} series={barChartData.series} type="bar" height={359} />
    </div>
  );
};

export default WeeklyBarChart;