import React, {  useEffect, useState } from 'react';
import { formatter } from '../../../utils/formatCurrency';
import { getDetailProductById } from '../../../api/Client/Home/productDetailAPI';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../../../redux/selectors';
import { getStorageImage } from '../../../api/StorageImage';
import CartItem from '../../../components/client/Cart/CartItem';

export  function CartPage(props) {
  const [listCartProduct, setListCartProduct] = useState([])
  const [productDetail, setProductDetail] = useState()
  const [total, setTotal] = useState()
  const dataCart = useSelector(cartSelector)
  console.log(dataCart);
  const getInfoProductWithID = async (id) => {
    const result= await getDetailProductById(id)
    // console.log(result);
    if (result === 401) {
      return false;
    } else if (result === 500) {
      return false;
    } else {
      const urlArrayImageSlide = 'ProductSlide?cat=' + result.image_slide;
      const imageSlice = await getStorageImage(urlArrayImageSlide);
      if (imageSlice === 401 || imageSlice === 500) return false;
      else {
        result.image_slide = imageSlice;
        setProductDetail(result);
        return result;
      }
    }

  }


  const handleGetDataProduct = async (dataCart,callback,callback2) => {
    console.log('callAPI');
    let data = dataCart.map(async (item) =>
      await getInfoProductWithID(item.id)
    )
    let temp = await Promise.all(data)
   // console.log('ínfc',temp);
    const remakedata=temp.map((item,index) =>{ return {...item,quantity_cart:dataCart[index].qty }})
    callback(remakedata)
    //callback(temp)
    callback2(remakedata.reduce((acc,item) =>acc+(item.price*item.quantity_cart),0))

  }
  const dispatch=useDispatch()
  console.log(listCartProduct);
  useEffect(async () => {
    await handleGetDataProduct(dataCart,setListCartProduct,setTotal)
  }, [dispatch])

  return (
      <section>
        <div className="container-fluid mt-5 animsition">
          <h5 className="text-danger font-weight-bold mb-3">Cart </h5>
          <form className="bg0 p-t-75 p-b-85">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                  <div className="m-l-25 m-r--38 m-lr-0-xl">
                    <div className="wrap-table-shopping-cart">
                      <table className="table-shopping-cart">
                        <tbody>
                        <tr className="table_head">
                          <th className="column-1">Product</th>
                          <th className="column-2"></th>
                          <th className="column-3">Price</th>
                          <th className="column-4">Quantity</th>
                          <th className="column-5">Total</th>
                        </tr>
                        {
                          listCartProduct.map((item)=>(
                            <CartItem id={item.id} name={item.name}
                                            price={item.price} key={item.id}
                                            quantity_cart={item.quantity_cart}
                                            limit_amount={item.amount}
                                            image={item.image}
                            />
                          ))
                        }
                        </tbody>
                      </table>
                    </div>

                    <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                      <div className="flex-w flex-m m-r-20 m-tb-5">
                        <input className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text"
                               name="coupon" placeholder="Coupon Code"/>

                        <div
                          className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                          Apply coupon
                        </div>
                      </div>

                      <div
                        className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                        Update Cart
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                  <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                    <h4 className="mtext-109 cl2 p-b-30">
                      Cart Totals
                    </h4>

                    <div className="flex-w flex-t bor12 p-b-13">
                      <div className="size-208">
								<span className="stext-110 cl2">
									Subtotal:
								</span>
                      </div>

                      <div className="size-209">
								<span className="mtext-110 cl2">
									{formatter.format(total)}
								</span>
                      </div>
                    </div>


                    <div className="flex-w flex-t p-t-27 p-b-33">
                      <div className="size-208">
								<span className="mtext-101 cl2">
									Total:
								</span>
                      </div>

                      <div className="size-209 p-t-1">
								<span className="mtext-110 cl2">
									$79.65
								</span>
                      </div>
                    </div>

                    <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
      </section>
  );
}
