import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Chart } from 'primereact';
import { getStatistisOrder } from '../../../../api/Admin/Statistic/statisticAPI';
import "./index.css"
import { Button } from 'react-bootstrap';
import NotFoundData from '../../../commons/Layouts/NotFoundData';


function ChartLineOrders({ type,label,data,onFilter }) {
  console.log('chartline orders rerendered');
  const optionFilter=[
    {id:1,name:'Monthly'},
    {id:2,name:'Weekly'},
    {id:3,name:'Today'},
  ]
  const [filter,setFilter]= useState('Weekly')

  const dataOrder = {
    labels: label,
    datasets: [
      {
        label: 'Amount of orders',
        data: data,
        fill: false,
        borderColor: '#4bc0c0'
      }
    ]
  };
  const optionsOrder = {
    plugins: {
      title: {
        display: true,
        text: 'The chart shows the Order for sale',
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
    <div className=" container_chart_order">
      <div className="chart-header">
        Orders
        <div className="chart-button">
          {
            optionFilter.map(option=>(
              <Button
                key={option.id}
                variant="outline-dark"
                checked={filter===option.name}
                className="font-weight-bold margin-left-8px"
                onClick={()=>{
                  onFilter(option.name)
                  setFilter(option.name)
                }}
              >
                {option.name}
              </Button>
            ))
          }
        </div>
      </div>
        <Chart type={type} data={dataOrder} options={optionsOrder}  className="m-lg-3" id='chart'/>
      <div className="chart-footer">
      </div>
    </div>
  );
}

export default memo(ChartLineOrders);