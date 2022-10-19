import React, { useEffect, useState } from 'react';
import ChartLineOrders from '../../../components/Statistic/Selling/order';
import PieChartCategory from '../../../components/Statistic/Selling/Category/category';
import SummaryStatisTic from '../../../components/Statistic/Summary';
import LineChartRevenue from '../../../components/Statistic/Selling/revenue';
import { Col, Row } from 'react-bootstrap';
import BarChartStaff from '../../../components/Statistic/Selling/Staff/staff';
import {
  getFigureNewCustomer,
  getFigureNewOrderToday,
  getFigureRevenueToday,
  getStatistisOrder,
} from '../../../api/Statistic/statisticAPI';

export function DashBoardPage(props) {
  const [loading, setLoading] = useState(true);
  const [summaryData, setSummaryData] = useState({});
  const [chartOrder, setChartOrder]= useState([])
  const [filterOrder,setFilterOrder]=useState('Weekly')
  const checkResultAPI = (result) => {
    if (result === 401 || result === 500) return false;
    else return result.data;
  };
  useEffect(() => {
      const handleGetSummaryData = async () => {
        const resultOrder = checkResultAPI(await getFigureNewOrderToday());
        const resultRevenue = checkResultAPI(await getFigureRevenueToday());
        const resultCustomer = checkResultAPI(await getFigureNewCustomer());
        setSummaryData({
          'order': resultOrder.reduce((acc, order) => order).amount_order,
          'revenue': resultRevenue.reduce((acc, revenue) => revenue).revenue,
          'customer': resultCustomer.reduce((acc, customer) => customer).amount_customer,
        });
      };
      handleGetSummaryData();
      const handleGetStatistisOrders = async () => {
        const result = await getStatistisOrder({ filter:filterOrder })
        if (result === 401) {
          return false;
        } else if (result === 500) {
          return false;
        } else {
          setChartOrder(result.data)
        }
      };
      handleGetStatistisOrders();
    },
    [filterOrder]);
  console.log(filterOrder)
  /* config chart */
  const dataOrder = {
    labels: chartOrder.map(item=>item.date),
    datasets: [
      {
        label: 'Amount of orders',
        data: chartOrder.map(item=>item.amount_order),
        fill: false,
        borderColor: '#4bc0c0'
      }
    ]
  };
  const optionsOrder = {
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
    <>
      <div className='container-fluid mt-5'>
        <SummaryStatisTic
          order={summaryData.order}
          revenue={summaryData.revenue}
          customer={summaryData.customer}
        />
        <div className=' justify-content-center'>
          <ChartLineOrders type='line' data={dataOrder} options={optionsOrder} handleFilter={setFilterOrder} />
          <LineChartRevenue />
          <Row>
            <Col><BarChartStaff /></Col>
            <Col> <PieChartCategory /></Col>
          </Row>
          {/**/}
        </div>
      </div>
    </>
  );
}
