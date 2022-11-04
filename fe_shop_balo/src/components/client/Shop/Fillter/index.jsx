import React, { useState } from 'react';
import { GrSubtract } from 'react-icons/gr';
import { FiPlus } from 'react-icons/fi';
import FillterContent from './FillterContent';
import './style.css';

const Fillter = ({ item, title }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <div className="section-filter">
        <div className="d-flex flex-column">
          <div className="t-collapse t-collapse--active">
            <span
              className="t-collapse__heading d-flex align-items-center justify-content-between"
              onClick={() => setIsToggle(!isToggle)}
            >
              <h3 className="t-collapse__title">{title}</h3>
              <span className="t-collapse__icon ">{isToggle ? <GrSubtract /> : <FiPlus />}</span>
            </span>
            {isToggle && <FillterContent item={item} />}

            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fillter;
