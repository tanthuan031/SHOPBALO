import React from 'react';
import PropTypes from 'prop-types';

const AutoCallPhone = (props) => {
  const {className,onClick,phoneNumber} = props;

  return (
    <span className={`cursor-pointer ${className}`} onClick={onClick}>
      {phoneNumber}
    </span>
  );
};
AutoCallPhone.propTypes = {
  onClick: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired
}
export default AutoCallPhone;