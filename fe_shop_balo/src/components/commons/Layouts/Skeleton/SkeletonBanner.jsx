import { Skeleton } from 'primereact/skeleton';
import React from 'react';

const SkeletonBanner = (props) => {
  const {colunm=3,height='3rem'} = props
  return (
    <>
      <div className="d-flex justify-content-between gap-4 p-3">
        {[...Array(colunm)].map((_, index) => (
          <div key={index} className="card position-relative w-100">
            <Skeleton width="50%" height={height} className="position-absolute top-0 start-50 translate-middle-x" />
            <div className="card-body">
              <Skeleton width="100%" height="15rem" className="mt-5" />
              <Skeleton width="30%" height="2rem" className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkeletonBanner;
