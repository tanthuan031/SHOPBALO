import { concatQueryString } from './../../utils/concatQueryString';
import axiosClient from './../axiosClient';
export const configHeadersAuthenticate = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllReviews = async ({ search, page } = {}) => {
  const url = '/api/admin/rating';
  const queryString = [];
  if (search) queryString.push(`q=${search}`);
  if (page) queryString.push(`page=${page}`);

  const final_url = concatQueryString(queryString, url);
  const response = await axiosClient.get(final_url);
  if (response.data === 200) return 200;
  else if (response.data === 404) return 404;
  else if (response.data === 401) return 401;
  else return 500;
};

export const getReviewById = async (id) => {
  const url = `/api/admin/rating/${id}`;
  const response = await axiosClient.get(url);
  if (response.data === 200) return 200;
  else if (response.data === 404) return 404;
  else if (response.data === 401) return 401;
  else return 500;
};

export const addReview = async (data) => {
  const url = `/api/admin/rating`;
  const response = await axiosClient.post(url, data);
  if (response.data === 200) return 200;
  else if (response.data === 404) return 404;
  else if (response.data === 401) return 401;
  else return 500;
};

export const editReview = async (id, data) => {
  const url = `/api/admin/rating/${id}`;
  const response = await axiosClient.put(url, data);
  if (response.data === 200) return 200;
  else if (response.data === 404) return 404;
  else if (response.data === 401) return 401;
  else return 500;
};