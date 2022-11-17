import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../../../../redux/reducer/shop/shop.reducer';
import './style.css';

const FillterContent = ({ item }) => {
  // const [categoryId, setCategoryId] = useState(1);
  const dispatch = useDispatch();

  const handleCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <>
      <div className="t-collapse__content">
        <div className="pb-6">
          <div className="gap-3">
            <div className="d-flex flex-wrap gap-3 cursor-pointer">
              {item.map((cate, i) => (
                <span className="t-collapse__label" key={i} onClick={() => handleCategoryId(cate.id)}>
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
