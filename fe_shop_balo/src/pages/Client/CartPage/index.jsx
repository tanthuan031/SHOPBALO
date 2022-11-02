import React, { createContext, useEffect, useState } from 'react';
import TableProductCart from '../../../components/client/Cart/TableProductCart';
import { formatter } from '../../../utils/formatCurrency';
export function CartPage(props) {
  const [listCartProduct,setListCartProduct]= useState([])
  const [total,setTotal]=useState()
  useEffect(() => {

    setTotal()
  },[])
  const TotalPriceContext = createContext();
  return (
  <TotalPriceContext.Provider value={setTotal}>
    <section>
      <div className="container-fluid mt-5 animsition">
        <h5 className="text-danger font-weight-bold mb-3">Cart </h5>
        <form className="bg0 p-t-75 p-b-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                <TableProductCart className="" onSetTotal={setTotal}/>
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
  </TotalPriceContext.Provider>
  );
}
