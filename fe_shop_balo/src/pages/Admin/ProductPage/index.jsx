import React from 'react';

import { data_product } from '../../../asset/data/data_product';
import { product_table_header } from '../../../asset/data/product_table_header';
import PaginationUI from '../../../components/Layouts/Pagination';
import { ProductTable } from '../../../components/Product';
export function ProductPage(props) {
  const data_product_table_header = [...product_table_header];
  const data_product_table = [...data_product];

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <ProductTable tableHeader={data_product_table_header} tableBody={data_product_table} />
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
