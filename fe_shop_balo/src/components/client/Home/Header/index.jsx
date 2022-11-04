import React from 'react';
import './style.css';
import '../../../../asset/js/jquery-custom';
import { ListGroup as ListGroupBootstrap } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdShoppingCart, MdSearch } from 'react-icons/md';
import { HiOutlineHeart } from 'react-icons/hi';

const data_menu_top = ['Help & FAQs', 'My Account', 'EN', 'USD'];
const data_menu_list = [
  {
    id: 1,
    name: 'Home',
    active: true,
    link: '/',
  },
  {
    id: 2,
    name: 'Product',
    active: false,
    link: '/product',
  },
  {
    id: 3,
    name: 'About',
    active: false,
    link: '/about',
  },
  {
    id: 4,
    name: 'Contact',
    active: false,
    link: '/contact',
  },
  {
    id: 5,
    name: 'Checkout',
    active: false,
    link: '/checkout',
  },
];

const Header = () => {
  return (
    <>
      <header>
        {/* <!-- Header desktop --> */}
        <div className="container-menu-desktop">
          {/* <!-- Topbar --> */}
          <div className="top-bar">
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
          </div>

          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
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
                  data-notify="2"
                >
                  <MdShoppingCart />
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>

                <a
                  href="#"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <HiOutlineHeart />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
