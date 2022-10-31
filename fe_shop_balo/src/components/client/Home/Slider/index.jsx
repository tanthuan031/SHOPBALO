import React, { useEffect, useState } from 'react';
import '../../../../asset/js/slick-custom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper';
import { getAllSlider } from '../../../../api/Client/Home/homeAPI';

const images = [
  'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
  'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
];

const Slider = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const handleGetAllSlider = async () => {
  //   setIsLoading(true);

  //   const result = await getAllSlider();
  //   setData(result);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   handleGetAllSlider();
  // }, []);
  // console.log('33 ne: ', data);

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel]}
        className="mySwiper"
      >
        {
          // data.length > 0 &&
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                // src={item.image.split('http://127.0.0.1:8000/storage/Slider/')[1]}
                src={item}
                alt="PHOTO"
                style={{ objectFit: 'cover' }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
