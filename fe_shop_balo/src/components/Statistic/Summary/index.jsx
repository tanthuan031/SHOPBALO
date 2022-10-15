import React from 'react';
import "./index.css"
import { Col, Row } from 'react-bootstrap';
import { FaCoins, FaPeopleArrows, FaShoppingCart } from 'react-icons/fa';
function SummaryStatisTic(props) {
  return (
    <Row className="summary-container">
      <Col  className=" small-box st-orders">
          <div className="inner">
            <h3>150</h3>

            <p>New Orders</p>
          </div>
          <div className="icon">
            <FaShoppingCart />
          </div>
      </Col>
      <Col   className=" small-box st-revenue">
        <div className="inner">
          <h3>150</h3>

          <p>Revenue Today</p>
        </div>
        <div className="icon">
          <FaCoins />
        </div>
      </Col>
      <Col  className=" small-box  st-customers">
        <div className="inner">
          <h3>150</h3>

          <p>New Customers</p>
        </div>
        <div className="icon">
          <FaPeopleArrows />
        </div>
      </Col>
      <Col  className=" small-box  st-customers">
        <div className="inner">
          <h3>150</h3>

          <p>New Customers</p>
        </div>
        <div className="icon">
          <FaPeopleArrows />
        </div>
      </Col>


    </Row>

  );
}

export default SummaryStatisTic;