import React from "react";
import ChartLineOrders from '../../../components/Statistic/Selling/order';
import PieChartCategory from '../../../components/Statistic/Selling/category';
import SummaryStatisTic from '../../../components/Statistic/Summary';
export function DashBoardPage(props) {

  return (
    <>
      <div className="container-fluid mt-5">
        <SummaryStatisTic />
        <div className=" justify-content-center">
          <ChartLineOrders />
          {/* <PieChartCategory />*/}
        </div>
      </div>
    </>
  );
}
