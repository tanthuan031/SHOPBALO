import React from 'react';
import { Modal as ModalBootstrap } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './style.css';

export default function Modal(props) {
  const { elementModalBody, elementModalTitle } = props;

  return (
    <ModalBootstrap
      show={props.show}
      onHide={() => {
        props.setStateModal();
      }}
      dialogClassName="modal-90w"
      centered
      backdrop={props.backdrop}
    >
      <ModalBootstrap.Header closeButton className="">
        <h5 className="text-danger font-weight-bold w-100 text-center">{elementModalTitle}</h5>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>
        <div>{elementModalBody}</div>
      </ModalBootstrap.Body>
    </ModalBootstrap>
  );
}

Modal.propTypes = {
  elementModalBody: PropTypes.element,
  //   elementModalTitle: PropTypes.element,
  setStateModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  backdrop: PropTypes.any,
};
