import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

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
];

const ProductList = () => {
  return (
    <>
      <div className="row isotope-grid">
        {data.map((item) => (
          <ProductItem item={item} key={item.id}/>
        ))}
      </div>
    </>
  );
};

export default ProductList;