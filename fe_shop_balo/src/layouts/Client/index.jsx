// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

import { useState } from 'react';
import { exPiredTokenSelector, getUserSelector } from '../../redux/selectors';

export function ClientLayout(props) {
  const { slot } = props;
  const expiredToken = useSelector(exPiredTokenSelector);
  const [showLogout, setStateModalLogout] = useState(false);
  const user = useSelector(getUserSelector);
  return (
    <>

      <main id="main-client" className="main">
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
