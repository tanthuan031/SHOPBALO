import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, isOpenCartCompact } from '../../../../redux/selectors';
import {  FaTimes } from 'react-icons/fa';
import { setIsOpenCartCompact } from '../../../../redux/reducer/home/home.reducer';
import { useNavigate } from 'react-router-dom';
import "./index.css"
import { getDetailProductById } from '../../../../api/Client/Home/productDetailAPI';
import { getStorageImage } from '../../../../api/StorageImage';
import ImageCustom from '../../../commons/Layouts/Image';
import { formatter } from '../../../../utils/formatCurrency';

function CartCompact(props) {
  let navigate = useNavigate();
  const [listCart, setListCart] = useState([]);
  const [total,setTotal] = useState(0)
  const dataCart = useSelector(cartSelector);
  const getInfoProductWithID = async (id) => {
    const result = await getDetailProductById(id);
    // console.log(result);
    if (result === 401) {
      return false;
    } else if (result === 500) {
      return false;
    } else {
      const urlArrayImageSlide = 'Product?cat=' + result.image;
      const imageSlice = await getStorageImage(urlArrayImageSlide);
      if (imageSlice === 401 || imageSlice === 500) return false;
      else {
        result.image = imageSlice;
        return result;
      }
    }

  };
  const handleGetDataProduct = async (dataCart, callback, callback2) => {
    console.log('callAPI');
    let data = dataCart.map(async (item) =>
      await getInfoProductWithID(item.id),
    );
    let temp = await Promise.all(data);
    // console.log('ínfc',temp);
    const redata = temp.map((item, index) => {
      return { ...item, quantity_cart: dataCart[index].qty };
    });
    callback(redata);
    //callback(temp)
    callback2(redata.reduce((acc, item) => acc + (item.price * item.quantity_cart), 0));

  };
  const isLoadingCart=useSelector(isOpenCartCompact)
  const dispatch  = useDispatch();
  useEffect( () => {
    ( async ()=>await handleGetDataProduct(dataCart, setListCart, setTotal))();

  }, [ isLoadingCart]);
  const isOpenCart = useSelector(isOpenCartCompact )
  const dispacth=useDispatch()
  const handleCloseOpenCart=()=>{
    dispacth(setIsOpenCartCompact(false))
  }
  const handleFowardCartPage=()=>{
    navigate('/cart')
  }
  const handleFowardCheckoutPage=()=>{
    navigate('/checkout')
  }
  return (
    <div className={`wrap-header-cart js-panel-cart z-index-1m ${!!isOpenCart&&`show-header-cart`}`}>
      <div className="s-full js-hide-cart"></div>

      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
				<span className="mtext-103 cl2">
					Your Cart
				</span>

          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart btn-close-expand-cart"
          onClick={()=>handleCloseOpenCart()}>
            <FaTimes />
          </div>
        </div>

        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {!!listCart && listCart.map((item,index)=>(
              <li className="header-cart-item flex-w flex-t m-b-12" key={index}>
                <div className="header-cart-item-img">
                  <ImageCustom src={item.image} alt={`cart item - ${index}`}/>
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    {item.name}
                  </a>

                  <span className="header-cart-item-info">
								{item.quantity_cart} x {formatter.format(item.price)}
							</span>
                </div>
              </li>
            ))}

          </ul>

          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              Total: {formatter.format(total)}
            </div>

            <div className="header-cart-buttons flex-w w-full">
              <a  href={'/cart'}
                 className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10 cursor-pointer">
                View Cart
              </a>

              <a onClick={()=>handleFowardCheckoutPage()}
                 className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10 cursor-pointer">
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCompact;