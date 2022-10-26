import React, { useState } from 'react';
import Gallery from '../../../components/client/ProductDetail/Gallery';
import InfoProduct from '../../../components/client/ProductDetail/InfoProduct';
import ReviewProduct from '../../../components/client/ProductDetail/Review';
import RelateProduct from '../../../components/client/ProductDetail/RelateProduct';
import './index.css';
import "../../../css/main_client.css"
import "../../../css/util_client.css"
import { Col, Row } from 'react-bootstrap';

function ProductDetailPage(props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/*-------------------------------------DetailProduct--------------------------------*/}
      <section className='sec-product-detail bg0 p-t-65 p-b-60'>
        <div className='container-fluid'>
          <Row>
            <Col md='6' lg='7'>
              <Gallery />
            </Col>
            <Col md='6' lg='5'>
              <InfoProduct price={85000} description={'Án ngủ chơi'} name={'BackPack 4444'} color={'#b61395'} />
            </Col>
          </Row>

          <div className='bor10 m-t-50 p-t-43 p-b-40'>
            <ReviewProduct />

          </div>
        </div>

      </section>
      {/*-------------------------------------ReviewProduct--------------------------------*/}
      <section className='sec-relate-product bg0 p-t-45 p-b-105'>
        <RelateProduct />
      </section>
    </>
  );
}

export default ProductDetailPage;