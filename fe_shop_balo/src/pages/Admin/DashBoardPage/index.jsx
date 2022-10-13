import React from "react";
import ChartLineOrders from '../../../components/Statistic/Order';
import PieChartCategory from '../../../components/Statistic/Category';
export function DashBoardPage(props) {

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <ChartLineOrders />
          <PieChartCategory />
        </div>
      </div>
    </>
  );
}
