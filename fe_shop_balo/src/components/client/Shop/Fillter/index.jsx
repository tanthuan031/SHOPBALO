import React, { useState } from 'react';
import { GrSubtract } from 'react-icons/gr';
import { FiPlus } from 'react-icons/fi';
import FillterContent from './FillterContent';
import { setFillterPriceStart, setFillterPriceEnd } from '../../../../redux/reducer/shop/shop.reducer';
import './style.css';
import { useDispatch } from 'react-redux';

const Fillter = ({ item, title, isContent }) => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(true);

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
            {isContent ? (
              isToggle && <FillterContent item={item} />
            ) : (
              <div className="d-flex">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="from"
                    onChange={(e) => dispatch(setFillterPriceStart(e.target.value))}
                  />
                  <label htmlFor="from">From</label>
                </div>
                <span className="fs-2">{' - '}</span>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="to"
                    onChange={(e) => dispatch(setFillterPriceEnd(e.target.value))}
                  />
                  <label htmlFor="to">To</label>
                </div>
              </div>
            )}

            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fillter;
