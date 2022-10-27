import React, { useState } from 'react';
import Gallery from '../../../components/client/ProductDetail/Gallery';
import InfoProduct from '../../../components/client/ProductDetail/InfoProduct';
import ReviewProduct from '../../../components/client/ProductDetail/ReviewProduct';
import RelateProduct from '../../../components/client/ProductDetail/RelateProduct';
import './index.css';
import "../../../css/main_client.css"
import "../../../css/util_client.css"
import { Col, Row } from 'react-bootstrap';

function ProductDetailPage(props) {
  const [loading, setLoading] = useState(true);
  /*----Fake Data-------*/
  const list_review=[
    {
      id:1,
      name:'chilles',
      avatar: 'https://i.pinimg.com/736x/04/63/65/046365b8e18260f74570cb1fb9bfa7a0.jpg',
      point:2.689,
      comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',

    },
    {
      id:2,
      name:'Beyodn',
      avatar: 'https://i.pinimg.com/564x/03/a7/d2/03a7d2849cbbd1461f6ad29dde77d2c9.jpg',
      point:3.357,
      comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',

    },
    {
      id:3,
      name:'Joan May',
      avatar: 'https://i.pinimg.com/564x/41/66/26/416626af3428f523bcde82a8822b7f69.jpg',
      point:4.6,
      comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',

    },
  ]
  const point_average_product=list_review.reduce((acc, item) => acc+item.point,0)/list_review.length
  return (
    <>
      {/*-------------------------------------DetailProduct--------------------------------*/}
      <section className='sec-product-detail bg0 p-t-65 p-b-60'>
        <div className='container'>
          <Row>
            <Col md='6' lg='7'>
              <Gallery />
            </Col>
            <Col md='6' lg='5'>
              <InfoProduct price={85000} description={'<p>Tresor với những người thợ thủ công trên 20 năm kinh nghiệm, chúng tôi nghiên cứu, am hiểu sâu sắc về các loại balo. Chúng tôi hiểu từng chi tiết của balo như thế nào để mang lại cảm giác thoải mái nhất cho người sử dụng, ngăn chia khoa học ra sao để phù hợp nhất với từng mục đích sử dụng khác nhau. Từ thiết kế đến chất lượng nguyên phụ liệu, từng đường chỉ may được đầu tư rất kỹ lưỡng nhằm mang đến những sản phẩm hoàn thiện nhất với chất lượng cao nhất.\n</p>'}
                    star={point_average_product}       name={'BackPack 4444'} color={'#b61395'} amount={10}/>
            </Col>
          </Row>

          <div className='bor10 m-t-50 p-t-43 p-b-40'>
            <ReviewProduct list_review={list_review} />

          </div>
        </div>

      </section>
      {/*-------------------------------------ReviewProduct--------------------------------*/}
      <section className='sec-relate-product bg0 p-t-45 p-b-105'>
        <RelateProduct  />
      </section>
    </>
  );
}

export default ProductDetailPage;