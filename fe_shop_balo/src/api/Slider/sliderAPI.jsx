import axiosClient from '../axiosClient';
import { concatQueryString } from '../../utils/concatQueryString';

export const configHeadersAuthenticate = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllSlider = async ({ sort, status, search, page } = {}) => {
  const url = '/api/admin/slider';
  const queryString = [];
  if (sort && sort.length > 0) queryString.push(`sort=${sort}`);
  if (search) queryString.push(`q=${search}`);
  if (status) queryString.push(`status=${status}`);
  if (page) queryString.push(`page=${page}`);

  const final_url = concatQueryString(queryString, url);
  const response = await axiosClient.get(final_url);

  if (response.status === 200) {
    return response.data;
  } else {
    return 401;
  }
};

export const getSliderById = async (id) => {
  const url = `/api/admin/slider/${id}`;
  const response = await axiosClient.get(url);
  if (response.status === 200) {
    return response.data;
  } else {
    return 401;
  }
};

export const addSlider = async (data) => {
  const url = `/api/admin/slider`;
  const response = await axiosClient.post(url, data);
  if (response.status === 401) {
    return 401;
  } else {
    return response;
  }
};

export const editSlider = async (id, data) => {
  const url = `/api/admin/slider/${id}`;
  const response = await axiosClient.put(url, data);
  if (response.status === 200) {
    return 200;
  } else if (response.status === 500) {
    return 500;
  } else {
    return 404;
  }
};

export const deletePromotion = async (id) => {
  const url = `/api/admin/discount/${id}`;
  const res = await axiosClient.delete(url);
  if (res.status === 200) {
    return 200;
  }
  return 401;
};
