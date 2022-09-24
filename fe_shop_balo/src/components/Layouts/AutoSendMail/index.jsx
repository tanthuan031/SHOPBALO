import React from 'react';
import PropTypes from 'prop-types';

const AutoSendMail = props => {
  const {className,onClick,email} = props
  return (
    <span className={`cursor-pointer ${className}`} onClick={onClick}>
      {email}
    </span>
  );
};

AutoSendMail.propTypes = {
    onClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

export default AutoSendMail;