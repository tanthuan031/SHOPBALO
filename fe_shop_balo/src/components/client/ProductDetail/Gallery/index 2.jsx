import React from 'react';
import './index.css';
import { FaExpand } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';

function Gallery(props) {

  return (
    <div className='p-l-25 p-r-30 p-lr-0-lg'>
      <Row className='wrap-slick3 flex-sb flex-w'>
        <Col md='4'  className=''>
          <ul className=''>
            <li className=''>
              <img src='http://placeimg.com/450/420 ' className='img-slide m-b-10' />
            </li>
            <li className=''>
              <img src='http://placeimg.com/450/420' className='img-slide m-b-10' />
            </li>
            <li className='slick-active'>
              <img src='http://placeimg.com/450/420' className='img-slide m-b-10' />
            </li>
          </ul>
        </Col>
        <Col md='8' className=''>
          <div className="image-product">
            <img src="http://placeimg.com/450/420" alt="IMG-PRODUCT"/>

              <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                 href="http://placeimg.com/450/420" tabIndex="0">
              </a>
            <FaExpand/>
          </div>
        </Col>

      </Row>
    </div>
  );
}

export default Gallery;