import React from 'react';
import './style.css';
import '../../../../asset/js/jquery-custom';
import { ListGroup as ListGroupBootstrap } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdShoppingCart, MdSearch } from 'react-icons/md';
import { HiOutlineHeart } from 'react-icons/hi';
import { data_header_client } from '../../../../asset/data/data_header_client';
import { cartSelector } from '../../../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenCartCompact } from '../../../../redux/selectors/';
import { setIsOpenCartCompact } from '../../../../redux/reducer/home/home.reducer';

// const data_menu_top = ['Help & FAQs', 'My Account', 'EN', 'USD'];
const data_menu_top = [
  {
    id: 1,
    name: 'Help & FAQs',
    links: '#',
  },
  {
    id: 2,
    name: 'My Account',
    links: '/my-account',
  },
  {
    id: 3,
    name: 'EN',
    links: '#',
  },
];
const data_menu_list = data_header_client;

const Header = () => {
  const cart=useSelector(cartSelector)
  const dispacth=useDispatch()
  const handleOpenCartCompact=()=>{
    dispacth(setIsOpenCartCompact(true))
  }


  return (
    <>
      <header>
        {/* <!-- Header desktop --> */}
        <div className="container-menu-desktop">
          {/* <!-- Topbar --> */}
          {/* <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">Free shipping for standard order over $100</div>

              <div className="right-top-bar flex-w h-full">
                {data_menu_top.map((item, index) => (
                  <a href="#" className="flex-c-m trans-04 p-lr-25" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div> */}

          <div className="wrap-menu-desktop">
            <nav className="top-bar">
              <div className="content-topbar flex-sb-m h-full container">
                <div className="left-top-bar">Free shipping for standard order over $100</div>

                <div className="right-top-bar flex-w h-full">
                  {data_menu_top.map((item, index) => (
                    <Link to={item.links} className="flex-c-m trans-04 p-lr-25" key={index}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            <nav className="limiter-menu-desktop container-fluid">
              {/* <!-- Logo desktop --> */}
              <Link to="/" className="me-5">
                <h4 className="font-weight-black text-black">TRESOR</h4>
              </Link>

              {/* <!-- Menu desktop --> */}
              <div className="menu-desktop main-menu">
                {data_menu_list.map((element) => (
                  <NavLink
                    to={element.link}
                    key={element.id}
                    className={({ isActive }) =>
                      isActive ? 'main-menu-li active-link' : 'main-menu-li not-active-link'
                    }
                  >
                    <ListGroupBootstrap.Item as="li">
                      <span className="ms-3">{element.name}</span>
                    </ListGroupBootstrap.Item>
                  </NavLink>
                ))}
              </div>

              {/* <!-- Icon header --> */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 js-show-modal-search d-flex align-items-center search-header">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Search..."
                  ></input>
                  <MdSearch className="icon-search" />
                </div>

                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={cart.length>0?cart.length:0}
                  onClick={() =>handleOpenCartCompact()}
                >
                  <MdShoppingCart />

                </div>

               <span className="dis-block  cl2  trans-04 p-l-22 p-r-11 icon-header-noti"></span>

              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
