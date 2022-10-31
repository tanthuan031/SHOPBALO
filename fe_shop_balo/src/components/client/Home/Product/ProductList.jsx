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

const data = [
  {
    id: 1,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpgg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 2,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 3,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 4,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 5,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpgg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 6,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 7,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
];

const ProductList = () => {
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
        {data.map((item) => (
          <SwiperSlide>
            <ProductItem item={item} key={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductList;
