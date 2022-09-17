import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { HiFilter } from 'react-icons/hi';
import PropTypes from 'prop-types';

import './style.css';

export default function FilterStatus(props) {
  const handleFilter = (value) => {
    props.setCurrentFilter(value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="user-type-filter-btn"
        className="btn-danger filter-button d-flex align-items-center justity-content-center margin-left-12px"
      >
        <p className="flex-grow-1 font-weight-bold">Status</p>
        <div className="fb-icon">
          <HiFilter />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu id="user-type-filter-menu">
        <Form>
          <Dropdown.Item onClick={() => handleFilter('All')}>
            <Form.Check
              type="checkbox"
              id="checkbox-all"
              className="mx-4 my-2 font-weight-bold"
              label="All"
              checked={props.currentFilter === 'All'}
              onChange={() => handleFilter('All')}
            />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter('Active')}>
            <Form.Check
              type="checkbox"
              id="checkbox-admin"
              className="mx-4 my-2 font-weight-bold"
              label="Active"
              checked={props.currentFilter === 'Admin'}
              onChange={() => handleFilter('Admin')}
            />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter('Out of stock')}>
            <Form.Check
              type="checkbox"
              id="checkbox-admin"
              className="mx-4 my-2 font-weight-bold"
              label="Out of stock"
              checked={props.currentFilter === 'Admin'}
              onChange={() => handleFilter('Admin')}
            />
          </Dropdown.Item>
        </Form>
      </Dropdown.Menu>
    </Dropdown>
  );
}

// FilterStatus.propTypes = {
//   currentFilter: PropTypes.string,
//   setCurrentFilter: PropTypes.func,
// };
