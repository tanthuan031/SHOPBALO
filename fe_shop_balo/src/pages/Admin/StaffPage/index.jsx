import React from 'react';

import { data_staff } from '../../../asset/data/staff/data_staff';
import { staff_table_header } from '../../../asset/data/staff/staff_table_header';
import PaginationUI from '../../../components/Layouts/Pagination';
import { StaffTable } from '../../../components/Staff';
export function StaffPage(props) {
  const data_staff_table_header = [...staff_table_header];
  const data_staff_table = [...data_staff];

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <StaffTable tableHeader={data_staff_table_header} tableBody={data_staff_table} />
          <PaginationUI
            // handlePageChange={handlePageChange}
            perPage={10}
            currentPage={1}
            totalRecord={100}
          />
        </div>
      </div>
    </>
  );
}
