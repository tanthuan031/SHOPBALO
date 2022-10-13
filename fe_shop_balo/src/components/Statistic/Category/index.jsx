import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact';
import { getStatistisCategory } from '../../../api/Statistic/statisticAPI';

function PieChartCategory(props) {
  const [loading,setLoading] = useState(true)
  const [chart,setChart] = useState([])
  let params = {};
  useEffect(() => {
    const handleGetStatistisCategory = async () => {
      const result = await getStatistisCategory(params)
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setChart(result.data);
      }
      setLoading(false);
    };
    handleGetStatistisCategory();
  },[])
  function random_color() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }

    return color;
  }
  console.log(chart)
  const dataPieChart =chart.map(item=>item.amount_categories)
  const dataLabel=chart.map(item=>item.name)
  let dataBackgroundColor=[];
  for (let i = 0; i < chart.length; i++) {
    dataBackgroundColor=[...dataBackgroundColor,random_color()]
  }

 // console.log(dataBackgroundColor)
  const chartData={
    labels: dataLabel,
    datasets: [
      {
        data: dataPieChart,
        backgroundColor: dataBackgroundColor,
        hoverBackgroundColor: dataBackgroundColor
      }
    ]
  };
  //console.log(chartData)

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  });
  return (
    <div className="card flex justify-content-center">
      <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
    </div>
  );
}

export default PieChartCategory;