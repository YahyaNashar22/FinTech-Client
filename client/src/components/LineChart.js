import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS,LineElement,LinearScale,PointElement, Legend, Tooltip, TimeScale } from "chart.js";
 import 'chartjs-adapter-date-fns'
ChartJS.register(
  LineElement,
   Legend,
   Tooltip, 
   TimeScale,
   LinearScale,
   PointElement 
  )

function LineChart() {
  const data = {
    labels: ['2022-11-02', '2022-11-03', '2022-11-04','2022-11-05'],
    datasets: [{
      label:'expenses',
      data: [6, 3, 9,3.69],
      backgroundColor:' #4DA192',
      borderColor:'black',
      tension:0.4,
      
    }
  
    ]
  }
  const options = {
   scales:{
    x:{
     type:'time',
     time:{
      unit:'day'
     },
     y:{
beginAtZero:true
     }
    }
   }
  }
  return<div
  style={
    {
      padding: '20px',
      width: '600px',
      height:'300px'
    }}>
  
  <Line
    data={data}
    options={options}
    >

    </Line>
    
</div>
  
    }
export default LineChart;
