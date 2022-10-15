import React, { useCallback, useEffect, useRef, useState } from 'react';
import {  getStatistisRevenue } from '../../../api/Statistic/statisticAPI';
import { Button } from 'react-bootstrap';
import { Chart } from 'primereact';

function LineChartRevenue(props) {
  const [loading,setLoading] = useState(true)
  const [chart,setChart] = useState([])
  let inputRef=useRef(null)

  const [filter,setFilter] = useState('weekly')
  useEffect(() => {
    const handleGetStatistisRevenue = async () => {
      const result = await getStatistisRevenue({ filter })
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setChart(result.data);
      }
      setLoading(false);
    };
    handleGetStatistisRevenue();
  },[filter])
  const labels=chart.map(item=>item.date)
  const dataChart=chart.map(item=>item.revenue)
  console.log(labels)
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Amount of revenues',
        data:  dataChart,
        fill: false,
        borderColor: '#b70544'
      },
      // {
      //   label: 'Second Dataset',
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   fill: false,
      //   brevenueColor: '#565656'
      // }
    ]
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'The chart shows revenue of store',
        font: {
          size: 16
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handleDownloadChart=useCallback(() =>{
    const link=document.createElement('a')
    link.download='chart_revenue.png'

    link.href=inputRef.current.toBas64Image();

    //link.click()
  },[])
  return (
    <div className=" container_chart_order">
      <div className="chart-header">
        Revenue
        <div className="chart-button">
          <Button
            variant="outline-dark"
            className="font-weight-bold"
            onClick={()=>setFilter('Monthly')}
          >
            Monthly
          </Button>
          <Button
            variant="outline-dark"
            className="font-weight-bold ms-2"
            onClick={()=>setFilter('Weekly')}
          >
            Weekly
          </Button>
          <Button
            variant="outline-dark"
            className="font-weight-bold ms-2"
            onClick={()=>setFilter('Today')}
          >
            Today
          </Button>
        </div>
      </div>
      <Chart type="line" data={data} options={options} ref={inputRef} className="m-lg-3" id='chart'/>
      <div className="chart-footer">
        <Button
          variant="outline-dark"
          className="font-weight-bold ms-2"
          onClick={handleDownloadChart}
        >
          Print
        </Button>
      </div>
    </div>
  );
}

export default LineChartRevenue;