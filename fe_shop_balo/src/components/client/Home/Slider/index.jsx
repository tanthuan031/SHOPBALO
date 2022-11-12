import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../asset/js/slick-custom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Skeleton } from 'primereact/skeleton';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper';
import './style.css';

const Slider = ({ slider, isLoadingSlider }) => {
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
        {!isLoadingSlider && slider.length > 0 ? (
          slider.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider-homepage">
                <Link to="/product">
                  <img src={item.image} alt="PHOTO" style={{ objectFit: 'cover' }} />
                  <summary>
                    <h2 className="description-homepage" dangerouslySetInnerHTML={{ __html: item.description }}></h2>
                    <h1 className="name-homepage">{item.name}</h1>
                    <button className="button-homepage">Shop now</button>
                  </summary>
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <Skeleton width="100%" height="75vh"></Skeleton>
        )}
      </Swiper>
    </>
  );
};

export default Slider;
