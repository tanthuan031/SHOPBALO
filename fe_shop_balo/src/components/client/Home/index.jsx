import React, { useEffect, useState } from 'react';
import { getAllCategory, getAllProducts } from '../../../api/Client/Home/homeAPI';
import { ErrorToast } from '../../commons/Layouts/Alerts';
import Skeleton from '../../commons/Layouts/Skeleton';
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
  const [dataBestSale, setDataBestSale] = useState([]);
  const [dataNewArrive, setDataNewArrive] = useState([]);
  const [dataOverview, setDataOverview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sell, setSell] = useState('bestsale');
  const [sort, setSort] = useState('desc');

  const handleGetAllProductBestSale = async () => {
    const result = await getAllProducts({ sell });
    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
    }
    setDataBestSale(result.data);
    setIsLoading(false);
  };
  const handleGetAllProductNewArrive = async () => {
    const result = await getAllProducts({ sort });
    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
    }
    setDataNewArrive(result.data);
    setIsLoading(false);
  };
  const handleGetAllProductOverview = async () => {
    const result = await getAllProducts({});
    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
    }
    setDataOverview(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetAllProductNewArrive();
    handleGetAllProductBestSale();
    handleGetAllProductOverview();
  }, [sell, sort]);

  return (
    <div className="animsition">
      <Slider />
      <Banner />

      {!isLoading ? <Product title={'New Arrives'} item={dataNewArrive} /> : <Skeleton column={4} lengthItem={3} />}
      {!isLoading ? <Product title={'Best Seller'} item={dataBestSale} /> : <Skeleton column={4} lengthItem={3} />}
      {!isLoading ? <Product title={'Product Overview'} item={dataOverview} /> : <Skeleton column={4} lengthItem={3} />}
    </div>
  );
};

const Product = (props) => {
  const { title, item } = props;
  const [dataCategory, setDataCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetAllCategory = async () => {
    const result = await getAllCategory();
    setDataCategory(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetAllCategory();
  }, []);

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
            {dataCategory.length > 0 &&
              dataCategory.map((item, i) => (
                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                  {item.name}
                </button>
              ))}
          </div>
        </div>

        <ProductList item={item} />
      </div>
    </section>
  );
};

export default Home;
