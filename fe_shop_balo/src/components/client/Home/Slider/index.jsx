import React from 'react';
import '../../../../asset/js/slick-custom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper';

const images = ['https://wallpapershome.com/images/pages/ico_h/24116.jpg', 'https://picsum.photos/seed/picsum/200/300'];

const Slider = () => {
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
        {images.map((item, index) => (
          <SwiperSlide>
            <img src={item} alt="PHOTO" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
