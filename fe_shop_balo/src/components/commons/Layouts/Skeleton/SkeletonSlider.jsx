import { Skeleton } from 'primereact/skeleton';
import React from 'react';

const SkeletonSlider = () => {
  const n = 3;
  return (
    <>
      <div className="card position-relative w-100">
        <div className="card-body">
          <Skeleton width="100%" height="70vh" />
          <Skeleton width="30%" height="5rem" className="mt-2" />
        </div>
      </div>
    </>
  );
};

export default SkeletonSlider;
