import React from "react";
import ChartLineOrders from '../../../components/Statistic/Selling/order';
import PieChartCategory from '../../../components/Statistic/Selling/Category/category';
import SummaryStatisTic from '../../../components/Statistic/Summary';
import LineChartRevenue from '../../../components/Statistic/Selling/revenue';
import { Col, Row } from 'react-bootstrap';
import BarChartStaff from '../../../components/Statistic/Selling/Staff/staff';
export function DashBoardPage(props) {

  return (
    <>
      <div className="container-fluid mt-5">
        <SummaryStatisTic />
        <div className=" justify-content-center">
          <ChartLineOrders />
          <LineChartRevenue />
          <Row>
            <Col><BarChartStaff/></Col>
            <Col> <PieChartCategory /></Col>
          </Row>
          {/**/}
        </div>
      </div>
    </>
  );
}
