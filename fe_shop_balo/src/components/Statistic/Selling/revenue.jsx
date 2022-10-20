import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import { Chart } from 'primereact';

function LineChartRevenue({ type,options,data,onFilter }) {
  console.log('chartline revenue rerendered');
  return (
    <div className=" container_chart_order">
      <div className="chart-header">
        Revenue
        <div className="chart-button">
          <Button
            variant="outline-dark"
            className="font-weight-bold"
            onClick={()=>onFilter('Monthly')}
          >
            Monthly
          </Button>
          <Button
            variant="outline-dark"
            className="font-weight-bold ms-2"
            onClick={()=>onFilter('Weekly')}
          >
            Weekly
          </Button>
          <Button
            variant="outline-dark"
            className="font-weight-bold ms-2"
            onClick={()=>onFilter('Today')}
          >
            Today
          </Button>
        </div>
      </div>
      <Chart type="line" data={data} options={options}  className="m-lg-3" id='chart'/>
      <div className="chart-footer">

      </div>
    </div>
  );
}

export default memo(LineChartRevenue);