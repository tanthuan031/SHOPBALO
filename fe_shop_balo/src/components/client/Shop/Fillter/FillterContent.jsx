import React from 'react';
import { GrSubtract } from 'react-icons/gr';
import './style.css';

const FillterContent = ({ item }) => {
  return (
    <>
      <div className="t-collapse__content">
        <div className="pb-6">
          <div className="gap-3">
            <div class="d-flex flex-wrap gap-3">
              {item.map((cate, i) => (
                <span className="t-collapse__label" key={i}>
                  {cate.name}
                </span>
              ))}

              <span className="t-collapse__label">Tui xach</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FillterContent;
