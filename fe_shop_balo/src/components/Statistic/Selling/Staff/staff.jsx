import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact';
import "./index.css"
import { getStatistisOrder, getStatistisStaff } from '../../../../api/Statistic/statisticAPI';
function BarChartStaff(props) {
  const [loading,setLoading] = useState(true)
  const [chart,setChart] = useState([])
  useEffect(() => {
    const handleGetStatistisStaff = async () => {
      const result = await getStatistisStaff({  })
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setChart(result.data);
      }
      setLoading(false);
    };
    handleGetStatistisStaff();
  },[])
  const data=chart.map(item => item.amount_order)
  const label=chart.map(item => `${item.first_name} ${item.last_name}`)
  const basicData ={
    labels:label,
    datasets: [
      {
        label: 'Amount of orders',
        backgroundColor: '#42A5F5',
        data: data
      },

    ]
  };
  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: .8,
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  };
  return (
    <div className=" card container_chart_md">
      <h5>Top Staff Productivity </h5>
      <Chart type="bar" data={basicData} options={basicOptions} />
    </div>
  );
}

export default BarChartStaff;