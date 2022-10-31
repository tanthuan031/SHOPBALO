import React from 'react';
import Banner from './Banner';
import ProductList from './Product/ProductList';
import Slider from './Slider';

const dataNA = [
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
];

const dataPO = [
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

const Home = () => {
  return (
    <div className="animsition">
      <Slider />
      <Banner />

      <Product title={'New Arrives'} item={dataNA} />
      <Product title={'Best Seller'} item={dataNA} />
      <Product title={'Product Overview'} item={dataPO} />
    </div>
  );
};

const Product = (props) => {
  const { title, item } = props;
  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10 txt-center">
          <h3 className="ltext-103 cl5">{title}</h3>
        </div>

        <div className="flex-w flex-sb-m p-b-52 d-flex justify-content-center">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
              All Products
            </button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
              Balo
            </button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
              Tui xach
            </button>
          </div>
        </div>

        <ProductList item={item} />
      </div>
    </section>
  );
};

export default Home;
