import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { HiFilter } from 'react-icons/hi';


import './sort.css';

export default function Sort(props) {
    const handleFilter = (value) => {
        props.setCurrentFilter(value);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle
                id="user-type-filter-btn"
                className="btn-danger filter-button d-flex align-items-center justity-content-center mr-2"
            >
                <p className="flex-grow-1 font-weight-bold">Sort</p>
                <div className="fb-icon">
                    <HiFilter />
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu id="user-type-filter-menu">
                <Form>
                    <Dropdown.Item onClick={() => handleFilter('First-Day')}>
                        <Form.Check
                            type="checkbox"
                            id="checkbox-first-day"
                            className="mx-4 my-2 font-weight-bold"
                            label="First Day"
                            checked={props.currentFilter === 'First-Day'}
                            onChange={() => handleFilter('First-Day')}
                        />
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('Last-Day')}>
                        <Form.Check
                            type="checkbox"
                            id="checkbox-last-lay"
                            className="mx-4 my-2 font-weight-bold"
                            label="Last Day"
                            checked={props.currentFilter === 'Last-Day'}
                            onChange={() => handleFilter('Last-Day')}
                        />
                    </Dropdown.Item>

                </Form>
            </Dropdown.Menu>
        </Dropdown>
    );
}

// FilterCategory.propTypes = {
//   currentFilter: PropTypes.string,
//   setCurrentFilter: PropTypes.func,
// };
