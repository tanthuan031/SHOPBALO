import React, { useEffect, useLayoutEffect, useState } from 'react';
import Gallery from '../../../components/client/ProductDetail/Gallery';
import InfoProduct from '../../../components/client/ProductDetail/InfoProduct';
import ReviewProduct from '../../../components/client/ProductDetail/ReviewProduct';
import RelateProduct from '../../../components/client/ProductDetail/RelateProduct';
import './index.css';
import '../../../css/main_client.css';
import '../../../css/util_client.css';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getDetailProductById } from '../../../api/Client/Home/productDetailAPI';
import { BlockUI } from '../../../components/commons/Layouts/Notiflix';
import { getProductById } from '../../../api/Admin/Product/productAPI';
import { getStorageImage } from '../../../api/StorageImage';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';

function ProductDetailPage(props) {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({});
  const [imageSlideProduct, setImageSlideProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handleGetInfoDetailProduct = async (id) => {

      const result = await getDetailProductById(id);
      console.log(result);
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        const urlArrayImageSlide = 'ProductSlide?cat=' + result.image_slide;
        const imageSlice = await getStorageImage(urlArrayImageSlide);
        if (imageSlice === 401 || imageSlice === 500) return false;
        else {
          result.image_slide = imageSlice;
          setProductDetail(result);
        }
      }


      /* const result = await getDetailProductById(id);
       console.log(result);
       if (result === 500) return false;
       else {
         result.image_slide=result.image_slide.split(',')
         setProductDetail(result);
       }*/

    };
    handleGetInfoDetailProduct(id);
  }, [id]);
  //console.log(productDetail);
  const list_review = [
    {
      id: 1,
      name: 'chilles',
      avatar: 'https://i.pinimg.com/736x/04/63/65/046365b8e18260f74570cb1fb9bfa7a0.jpg',
      point: 2.689,
      comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',

    },
    {
      id: 2,
      name: 'Beyodn',
      avatar: 'https://i.pinimg.com/564x/03/a7/d2/03a7d2849cbbd1461f6ad29dde77d2c9.jpg',
      point: 3.357,
      comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',

    },
    {
      id: 3,
      name: 'Joan May',
      avatar: 'https://i.pinimg.com/564x/41/66/26/416626af3428f523bcde82a8822b7f69.jpg',
      point: 4.6,
      comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',

    },
  ];
  const point_average_product = list_review.reduce((acc, item) => acc + item.point, 0) / list_review.length;
  return (
    <>
      {/*-------------------------------------DetailProduct--------------------------------*/}
      <section className='sec-product-detail bg0 p-t-65 p-b-60'>
        <div className='container'>
          <Row>
            <Col md='6' lg='7'>
              <Gallery listImage={productDetail.image_slide} />

            </Col>
            <Col md='6' lg='5'>
              <InfoProduct
                id={id}
                price={productDetail.price}
                description={productDetail.description}
                star={3.67} name={productDetail.name} color={productDetail.code_color} amount={productDetail.amount} />
            </Col>
          </Row>

          <div className='bor10 m-t-50 p-t-43 p-b-40'>
            <ReviewProduct list_review={list_review} />

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