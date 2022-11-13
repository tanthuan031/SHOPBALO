import React from 'react';

function RelateProduct(props) {
  return (
    <div className="container">
      <div className="p-b-45">
        <h3 className="ltext-106 cl5 txt-center">
          Related Products
        </h3>
      </div>

      
      <div className="wrap-slick2">
        <div className="slick2">
        
          <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
            
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src="images/product-07.jpg" alt="IMG-PRODUCT"/>

                  <a href="#"
                     className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
              </div>

              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                  <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                    Shirt in Stretch Cotton
                  </a>

                  <span className="stext-105 cl3">
										$52.66
									</span>
                </div>

                <div className="block2-txt-child2 flex-r p-t-3">
                  <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                    <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                      <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png"
                           alt="ICON"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
      
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src="images/product-08.jpg" alt="IMG-PRODUCT"/>

                  <a href="#"
                     className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
              </div>

              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                  <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                    Pieces Metallic Printed
                  </a>

                  <span className="stext-105 cl3">
										$18.96
									</span>
                </div>

                <div className="block2-txt-child2 flex-r p-t-3">
                  <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                    <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
                      <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png"
                           alt="ICON"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelateProduct;