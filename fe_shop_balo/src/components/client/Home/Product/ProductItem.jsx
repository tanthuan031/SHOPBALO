import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { formatter } from '../../../../utils/formatCurrency';

const ProductItem = (props) => {
  const { item } = props;
  return (
    <div className="" style={{ width: '20rem' }}>
      <div className="block2">
        <div className="block2-pic hov-img0">
          <img
            // src={item.image}
            src="https://picsum.photos/200/300"
            alt="IMG-PRODUCT"
            style={{ height: '25rem', objectFit: 'cover' }}
          />
          <Link
            to={`/product/${item.id}`}
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
          >
            Quick View
          </Link>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l">
            <a href={`/product/${item.id}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
              {item.name}
            </a>

            <span className="stext-105 cl3"> {formatter.format(item.price)} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
