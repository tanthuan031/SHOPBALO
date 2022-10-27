import React from 'react';
import { Link } from 'react-router-dom';

const images = 'https://wallpapershome.com/images/pages/ico_h/24116.jpg';
const data = [
  {
    id: 1,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
  },
  {
    id: 2,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
  },
  {
    id: 3,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
  },
];

const Banner = () => {
  return (
    <>
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
          <div className="row">
            {/* <!-- Block1 --> */}
            {data.map((item) => (
              <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto" key={item.id}>
                <div className="block1 wrap-pic-w">
                  <img src={item.image} alt="IMG-BANNER" />

                  <Link to="/product" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                    <div className="block1-txt-child1 flex-col-l">
                      <span className="block1-name ltext-102 trans-04 p-b-8">{item.name}</span>

                      <span className="block1-info stext-102 trans-04">{item.description}</span>
                    </div>

                    <div className="block1-txt-child2 p-b-4 trans-05">
                      <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
                    </div>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;