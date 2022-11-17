import React, { useRef, useState } from 'react';
import { ListGroup as ListGroupBootstrap } from 'react-bootstrap';
import { MdSearch, MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { data_header_client, data_menu_top } from '../../../../asset/data/client/data_header_client';
import '../../../../asset/js/jquery-custom';
import { setIsOpenCartCompact } from '../../../../redux/reducer/home/home.reducer';
import { setSearch } from '../../../../redux/reducer/shop/shop.reducer';
import { cartSelector } from '../../../../redux/selectors';
import { search } from '../../../../redux/selectors/shop/shop.selector';
import './style.css';

const data_menu_list = data_header_client;

const Header = () => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const [dataSearch, setDataSearch] = useState('');
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleOpenCartCompact = () => {
    dispatch(setIsOpenCartCompact(true));
  };

  // const getDataFromSearch = useSelector(search);
  // console.log('🚀 ~ file: index.jsx ~ line 34 ~ Header ~ getDataFromSearch', getDataFromSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(dataSearch));
    navigate('/product');
    ref.current.value = '';
  };

  return (
    <>
      <header>
        {/* <!-- Header desktop --> */}
        <div className="container-menu-desktop">
          {/* <!-- Topbar --> */}

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
                {/* start search */}
                <form
                  onSubmit={handleSubmit}
                  className="icon-header-item cl2 hov-cl1 trans-04 js-show-modal-search d-flex align-items-center search-header"
                >
                  <input
                    ref={ref}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Search..."
                    onChange={(e) => setDataSearch(e.target.value)}
                  ></input>
                  <button type="submit" className="icon-search">
                    <MdSearch />
                  </button>
                </form>
                {/* end search */}

                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={cart.length > 0 ? cart.length : 0}
                  onClick={() => handleOpenCartCompact()}
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
