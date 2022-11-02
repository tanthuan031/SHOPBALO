import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const ProductList = (props) => {
  const { item } = props;
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        // loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {item !== undefined &&
          item.length > 0 &&
          item.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductList;
