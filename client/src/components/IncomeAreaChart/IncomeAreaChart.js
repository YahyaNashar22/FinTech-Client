import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './incomeAreaChart.css';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const IncomeAreaChart = ({ slot }) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  // State for dynamic data
  const [chartData, setChartData] = useState({
    options: {
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      chart: {
        height: 450,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      grid: {
        strokeDashArray: 0
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light'
      }
    },
    series: [
      {
        name: 'Sales',
        data: []
      },
      {
        name: 'Profits',
        data: []
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/transactions/IncomeAreaChart');
        const data = response.data;

        console.log('Received Data:', data);

        // Update state with fetched data
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, [slot]);

  return <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string
};

export default IncomeAreaChart;
