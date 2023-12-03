import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(
  BarElement,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale)

function BarChart() {
  const data = {
    labels: ['mon', 'Tue', 'wed'],
    datasets: [{
      label: 'income',
      data: [3, 6, 9],
      backgroundColor: '#14EBBE',
      borderColor: 'black',
      borderWidth: 1,
    },
    {
      label: 'outcome',
      data: [3, 3, 3],
      backgroundColor: ' #4DA192',
      borderColor: 'black',
      borderWidth: 1,
    },
    ]
  }
  const options = {

  }
  return <div
    style={
      {
        padding: '20px',
        width: '100%',
        height:'500px'
      }}>

    <Bar
      data={data}
      options={options} />
</div>

  
}

export default BarChart;