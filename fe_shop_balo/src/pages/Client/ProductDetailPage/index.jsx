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
import { getDetailProductById, getRelateProducts } from '../../../api/Client/Home/productDetailAPI';
import { BlockUI } from '../../../components/commons/Layouts/Notiflix';
import { getProductById } from '../../../api/Admin/Product/productAPI';
import { getStorageImage } from '../../../api/StorageImage';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { getRatingWithProductID } from '../../../api/Client/Raing/ratingAPI';
import { Skeleton } from 'primereact';

function ProductDetailPage(props) {
  const [loadingProductAndReview, setLoadingProductAndReview] = useState(true);
  const [productDetail, setProductDetail] = useState({});
  const [listRating, setListRating] = useState([]);
  const [averageRating, setAverageRating] = useState(5);
  const [listRelateProducts, setListRelateProducts] = useState([]);
  const [idCategory, setIdCategory] = useState(0);
  const { id } = useParams();

  const getURLImageProduct = async (input) => {
    const urlIMG = await getStorageImage(input);
    if (urlIMG === 401 || urlIMG === 500) return false;
    else return urlIMG;
  };
  useEffect(() => {
    const handleGetInfoDetailProduct = async (id) => {
      const result = await getDetailProductById(id);
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
          result.image = imageMain[0];
          result.image_slide = imageSlice;
          setProductDetail(result);
          setIdCategory(result.category_id);

        }
      }
    };
    const handleGetInfoReviewProduct = async (id) => {
      const result = await getRatingWithProductID(id);
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        let rating = result.data.map((item) => ({
          id: item.id,
          name: `${item.customers.first_name} ${item.customers.last_name}`,
          avatar: item.customers.avatar,
          point: item.point,
          comment: item.content,
          image: item.image,
          date: item.created_date,
        }));
        setListRating(rating);
        let avr = rating.reduce((acc, item) => acc + item.point, 0) / rating.length;
        setAverageRating(!!avr ? avr : 5);
      }

    };
    //1 lỗi
    const handleGetRalateProducts = async (id) => {
      const result = await getRelateProducts(id);
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        let relateProducts = result.data.map((item) => ({
          id: item.id,
          name: item.name,
          image: 'https://product.hstatic.net/1000178923/product/5_be281c4746ee47be8f8ef613caa98953_master.jpg',// getURLImageProduct('Product?cat=' + item.image),
          price: item.price,
        }));
        setListRelateProducts(relateProducts);
      }

    };
    handleGetInfoDetailProduct(id);
    handleGetInfoReviewProduct(id);

    handleGetRalateProducts(idCategory);
    return () => {
      setLoadingProductAndReview(false);
    };

  }, [id, idCategory]);
  // console.log( 'Relate: ',listRelateProducts);

  return (
    <>
      {/*-------------------------------------DetailProduct--------------------------------*/}
      {!loadingProductAndReview ? (
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
                  star={averageRating} name={productDetail.name} color={productDetail.code_color}
                  amount={productDetail.amount} />
              </Col>
            </Row>

            <div className='bor10 m-t-50 p-t-43 p-b-40'>
              <ReviewProduct list_review={listRating} averageRating={averageRating} />

            </div>
          </div>

        </section>
      ) : (
        <Skeleton column={2} />
      )}
      {/*-------------------------------------RelateProduct--------------------------------*/}
      <section className='sec-relate-product bg0 p-t-45 p-b-105'>
        <RelateProduct listRelateProducts={listRelateProducts} />
      </section>
    </>
  );
}

export default ProductDetailPage;