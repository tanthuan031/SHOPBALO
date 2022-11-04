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
import { getRatingWithProductID } from '../../../api/Client/Raing/ratingAPI';

function ProductDetailPage(props) {
  const [loading, setLoading] = useState(true);
  const [productDetail, setProductDetail] = useState({});
  const [listRating, setListRating] = useState([])
  const [averageRating, setAverageRating] = useState(5)
  const [imageSlideProduct, setImageSlideProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handleGetInfoDetailProduct = async (id) => {
      const result = await getDetailProductById(id);
     // console.log(result);
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        const urlArrayImageSlide = 'ProductSlide?cat=' + result.image_slide;
        const urlImage = 'Product?cat=' + result.image;
        const imageSlice = await getStorageImage(urlArrayImageSlide);
        const imageMain = await getStorageImage(urlImage);
        if (imageSlice === 401 || imageSlice === 500) return false;
        else {
          result.image=imageMain[0]
          result.image_slide = imageSlice;
          setProductDetail(result);
        }
      }
    };
    const handleGetInfoReviewProduct=async (id)=>{
      const result = await getRatingWithProductID(id)
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        let rating=result.data.map((item)=> ({
          id: item.id,
            name: `${item.customers.first_name} ${item.customers.last_name}`,
            avatar: item.customers.avatar,
            point: item.point,
            comment: item.content,
            image: item.image,
            date: item.created_date,
        }))

       // console.log(rating);
            setListRating(rating);
        setAverageRating(rating.reduce((acc, item) => acc + item.point, 0) / rating.length);
    //    console.log(averageRating);
        }

    }
    handleGetInfoDetailProduct(id);
    handleGetInfoReviewProduct(id);

  }, [id]);
  //console.log(productDetail);
  // const list_review = [
  //   {
  //     id: 1,
  //     name: 'chilles',
  //     avatar: 'https://i.pinimg.com/736x/04/63/65/046365b8e18260f74570cb1fb9bfa7a0.jpg',
  //     point: 2.689,
  //     comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',
  //
  //   },
  //   {
  //     id: 2,
  //     name: 'Beyodn',
  //     avatar: 'https://i.pinimg.com/564x/03/a7/d2/03a7d2849cbbd1461f6ad29dde77d2c9.jpg',
  //     point: 3.357,
  //     comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',
  //
  //   },
  //   {
  //     id: 3,
  //     name: 'Joan May',
  //     avatar: 'https://i.pinimg.com/564x/41/66/26/416626af3428f523bcde82a8822b7f69.jpg',
  //     point: 4.6,
  //     comment: 'Product is a great. Store is wonderful. I statisfied about it so i am buying it again soon.  ',
  //
  //   },
  // ];

  return (
    <>
      {/*-------------------------------------DetailProduct--------------------------------*/}
      <section className='sec-product-detail bg0 p-t-65 p-b-60'>
        <div className='container'>
          <Row>
            <Col md='6' lg='7'>
              <Gallery listImage={productDetail.image_slide} mainImage={productDetail.image} />

            </Col>
            <Col md='6' lg='5'>
              <InfoProduct
                id={id}
                price={productDetail.price}
                description={productDetail.description}
                star={averageRating} name={productDetail.name} color={productDetail.code_color} amount={productDetail.amount} />
            </Col>
          </Row>

          <div className='bor10 m-t-50 p-t-43 p-b-40'>
            <ReviewProduct list_review={listRating} averageRating={averageRating}/>

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