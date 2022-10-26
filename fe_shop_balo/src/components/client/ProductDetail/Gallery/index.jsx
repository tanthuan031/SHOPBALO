import React, { useLayoutEffect, useRef, useState } from 'react';
import './index.css';
import { FaExpand } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Gallery({ mainImage,listImage }) {
  const data_image = [
    { id: 1, url: 'https://product.hstatic.net/1000178923/product/bbc5f912ea1446cf9ab48a71665557dc_13395b04fdf54ec2a981641a1e30f26d_master.jpg', alt: 'Anh01' },
    { id: 2, url: 'https://product.hstatic.net/1000178923/product/5_be281c4746ee47be8f8ef613caa98953_master.jpg', alt: 'Anh02' },
    { id: 3, url: 'https://product.hstatic.net/1000178923/product/4_75f33b3f2f1f4abf9d06d055a24287f9_master.jpg', alt: 'Anh03' },
  ];
  const [imageMain, setImageMain] = useState(data_image[0]);
  const imgMainProduct=useRef()
  const imgModal=useRef()
  const imgCaption=useRef()
  const imgBtnCloseModal=useRef()
  const imgBtnOpenExpandModal=useRef()
  const imgExpand=useRef()
  const handleExpandImageProduct=()=>{
    imgBtnOpenExpandModal.current.onclick = function(){
      imgModal.current.style.display = "block";
      imgExpand.current.src = imgMainProduct.current.src;
      imgCaption.current.innerHTML = imgMainProduct.current.alt;
    }
    imgBtnCloseModal.current.onclick = function() {
      imgModal.current.style.display = "none";
    }
  }
  useLayoutEffect(()=>{
    handleExpandImageProduct()

  },[])

  return (
    <div className='p-l-25 p-r-30 p-lr-0-lg'>
      <div className='wrap-slick3 flex-sb flex-w'>
        <div className='wrap-slick3-dots'>
          <ul className='slick3-dots'>
            {
              data_image.map(item=>(
                <li className={item.id===imageMain.id&&'img-slide-active'} onClick={()=>setImageMain(item)} key={item.id}>
                  <img src={item.url} className='img-slide' alt={item.alt} />
                </li>
              ))
            }
          </ul>
        </div>
        <div className='wrap-slick3-arrows flex-sb-m flex-w'></div>

        <div className='slick3 gallery-lb'>
          <div className='item-slick3' data-thumb='images/product-detail-01.jpg'>
            <div className='wrap-pic-w pos-relative'>
              <img src={imageMain.url} alt={imageMain.alt} id='imgMainProduct'  ref={imgMainProduct}/>
              <span className='flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04' ref={imgBtnOpenExpandModal} >
                  <FaExpand/>
              </span>
              <div id="myModal" ref={imgModal} className="modal">
                <span className="close"ref={imgBtnCloseModal} >&times;</span>
                <img className="modal-content" id="img01" ref={imgExpand}/>
                  <div id="caption" ref={imgCaption}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}
Gallery.propTypes = {
  listImage: PropTypes.array,
  mainImage: PropTypes.string
}

export default Gallery;