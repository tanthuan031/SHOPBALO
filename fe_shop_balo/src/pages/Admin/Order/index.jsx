import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../../api/order/indexAPI';
import { data_order } from '../../../asset/data/data_order';

import { order_table_header } from '../../../asset/data/order_table_header';
import PaginationUI from '../../../components/Layouts/Pagination';
import { OrderTable } from '../../../components/Order';
import UpdateStatusOrder from '../../../components/Order/UpdateStatusOrder';
import { isEditStatusOrderSelector } from '../../../redux/selectors/order/order.selector';

function OrderPage(props) {
  const data_order_table_header = [...order_table_header];
  const data_order_table_body = [data_order];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [loading, setLoading] = useState(true);
  const [perPage] = useState(10);
  const isUpdateStatus = useSelector(isEditStatusOrderSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetAllOrder = async () => {
      const result = await getAllOrder({});
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setOrder(result, 'reset_page');
      }
      setLoading(false);
    };
    handleGetAllOrder();
  }, [dispatch]);
  const setOrder = (result, value) => {
    setData(result.data);
    if (value !== 'page') {
      setPage(1);
    }
    setTotalRecord(result.meta.total);
  };
  const handlePageChange = async (page) => {
    setPage(page);
    setLoading(true);
  };
  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          <h5 className="text-danger font-weight-bold mb-3">Order List</h5>
          <div className="row">
            <div className="mb-3 d-flex justify-content-between">Fillter</div>
          </div>

          {!isUpdateStatus ? (
            <div className="row justify-content-center">
              <>
                <OrderTable tableHeader={data_order_table_header} tableBody={data} />
                <PaginationUI
                  handlePageChange={handlePageChange}
                  perPage={perPage}
                  totalRecord={totalRecord}
                  currentPage={page}
                />
              </>
            </div>
          ) : (
            <>{isUpdateStatus && <UpdateStatusOrder />}</>
          )}
        </div>
      </section>
    </>
  );
}

export default OrderPage;
