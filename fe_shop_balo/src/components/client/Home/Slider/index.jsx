import React, { useEffect, useState } from 'react';
import '../../../../asset/js/slick-custom';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper';
import { getAllSlider } from '../../../../api/Client/Home/homeAPI';
import Skeleton from '../../../commons/Layouts/Skeleton';
import './style.css';

const images = [
  'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
  'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
];

const Slider = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetAllSlider = async () => {
    const result = await getAllSlider();
    setData(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetAllSlider();
  }, []);

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
        {!isLoading ? (
          data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
             
              <div className="slider-homepage">
                 <Link to="/product">
                  <img
                    src={item.image.split('http://127.0.0.1:8000/storage/Slider/')[1]}
                    // src={item.image}
                    alt="PHOTO"
                    style={{ objectFit: 'cover' }}
                  />
                  <summary>
                    <h2 className="description-homepage">{item.description}</h2>
                    <h1 className="name-homepage">{item.name}</h1>
                    <button className="button-homepage">Shop now</button>
                </summary>
                 </Link>
                </div>
             
            </SwiperSlide>
          ))
        ) : (
          <Skeleton column={1} lengthItem={9} />
        )}
      </Swiper>
    </>
  );
};

export default Slider;
