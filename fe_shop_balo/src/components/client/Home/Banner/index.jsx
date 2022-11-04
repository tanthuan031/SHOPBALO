import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import { getAllCategory } from '../../../../api/Client/Home/homeAPI';
import Skeleton from '../../../commons/Layouts/Skeleton';

const images = 'https://wallpapershome.com/images/pages/ico_h/24116.jpg';
const data = [
  {
    id: 1,
    image: images,
    name: 'Women',
    description: 'Spring 2018',
  },
  {
    id: 2,
    image: images,
    name: 'Women',
    description: 'Spring 2018',
  },
  {
    id: 3,
    image: images,
    name: 'Women',
    description: 'Spring 2018',
  },
];

const Banner = () => {
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const handleGetAllCategory = async () => {
  //   const result = await getAllCategory();
  //   setData(result.data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   handleGetAllCategory();
  // }, []);

  return (
    <>
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
          <div className="row">
            <Swiper slidesPerView={3} spaceBetween={30} grabCursor={true} modules={[]} className="mySwiper">
              {!!isLoading && data.length > 0 ? (
                data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <BannerItem item={item} />
                  </SwiperSlide>
                ))
              ) : (
                <Skeleton column={3} lengthItem={3} />
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

const BannerItem = (props) => {
  const { item } = props;
  return (
    <div className="p-b-30 border" key={item.id} style={{ width: '100%', height: '20rem' }}>
      <div className="block1 wrap-pic-w" style={{ width: '100%', height: '20rem' }}>
        <img src={item.image} alt="IMG-BANNER" style={{ objectFit: 'fill' }} />

        <Link to="/product" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
          <div className="block1-txt-child1 flex-col-l">
            <span className="block1-name ltext-102 trans-04 p-b-8">{item.name}</span>

            {/* <span className="block1-info stext-102 trans-04">{item.description}</span> */}
          </div>

          <div className="block1-txt-child2 p-b-4 trans-05">
            <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
