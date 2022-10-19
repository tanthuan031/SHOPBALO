import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Chart } from 'primereact';
import { getStatistisOrder } from '../../../api/Statistic/statisticAPI';
import "./index.css"
import { Button } from 'react-bootstrap';


function ChartLineOrders({ type,options,data,handleFilter }) {


  return (
    <div className=" container_chart_order">
      <div className="chart-header">
        Orders
        <div className="chart-button">
          <Button
            variant="outline-dark"
            className="font-weight-bold"
            onClick={()=>handleFilter('Monthly')}
          >
           Monthly
          </Button>
          <Button
            variant="outline-dark"
            className="font-weight-bold ms-2"
            onClick={()=>handleFilter('Weekly')}
          >
            Weekly
          </Button>
          <Button
            variant="outline-dark"
            className="font-weight-bold ms-2"
            onClick={()=>handleFilter('Today')}
          >
            Today
          </Button>
        </div>
      </div>
      <Chart type={type} data={data} options={options}  className="m-lg-3" id='chart'/>
      <div className="chart-footer">
      </div>
    </div>
  );
}

export default ChartLineOrders;