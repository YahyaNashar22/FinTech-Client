import React from "react";
import { Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  )

 function PieChart() {
  const data = {
    labels: ['one', 'Two', 'three'],
    datasets: [{
      data: [3, 6, 9],
      backgroundColor:[' #4DA192',' #49837D','#14EBBE']
      
    }
  
    ]
  }
  const options = {

  }
  return <div
    style={
      {
        padding: '20px',
        width: '50%',
        height:'500px'
      }}>

    <Pie
    data={data}
    options={options}
    >

    </Pie>
    
</div>
  
    }

export default PieChart;