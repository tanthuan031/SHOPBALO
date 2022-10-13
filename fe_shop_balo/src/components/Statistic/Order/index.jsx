import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact';
import { getStatistisOrder } from '../../../api/Statistic/statisticAPI';



function ChartLineOrders(props) {
  const [loading,setLoading] = useState(true)
  const [chart,setChart] = useState([])
  let params = {};
  useEffect(() => {
    const handleGetStatistisOrders = async () => {
      const result = await getStatistisOrder(params)
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setChart(result.data);
      }
      setLoading(false);
    };
    handleGetStatistisOrders();
  },[])
  const labels=chart.map(item=>item.date)
  const dataChart=chart.map(item=>item.amount_order)
  console.log(labels)
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of orders',
        data:  dataChart,
        fill: false,
        borderColor: '#4bc0c0'
      },
      // {
      //   label: 'Second Dataset',
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   fill: false,
      //   borderColor: '#565656'
      // }
    ]
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'The chart shows the order for sale',
        font: {
          size: 16
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
  return (
    <div className="card flex justify-content-center">

      <Chart type="line" data={data} options={options} />
    </div>
  );
}

export default ChartLineOrders;