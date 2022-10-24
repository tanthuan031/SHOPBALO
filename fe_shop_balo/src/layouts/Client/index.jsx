// @flow
import * as React from 'react';
import Header from '../../components/commons/Layouts/Header';
import PropTypes from 'prop-types';
import ListGroup from '../../components/commons/Layouts/ListGroup';
import { menu_admin_item } from '../../asset/data/menu_admin_item';
import Drawer from '../../components/commons/Layouts/Drawer';
import { FaUsers } from 'react-icons/fa';
import './style.css';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import ExpiredToken from '../../components/commons/Auth/ExpiredToken';
import { exPiredTokenSelector, getUserSelector } from '../../redux/selectors';
import Logout from '../../components/commons/Auth/Logout';
import { useState } from 'react';

export function ClientLayout(props) {
  const { slot } = props;
  const menu_admin_item_data = [...menu_admin_item];
  const expiredToken = useSelector(exPiredTokenSelector);
  const [showLogout, setStateModalLogout] = useState(false);
  const user = useSelector(getUserSelector);
  return (
    <>
      <Header />
      <main id="main-client" className="main p-5">
        {slot}
      </main>
      {/* {expiredToken && <ExpiredToken show={expiredToken} setStateModal={() => true} />} */}
      {/* <Logout show={showLogout} setStateModal={() => setStateModalLogout(false)} /> */}
    </>
  );
}
ClientLayout.propTypes = {
  slot: PropTypes.element.isRequired,
};
