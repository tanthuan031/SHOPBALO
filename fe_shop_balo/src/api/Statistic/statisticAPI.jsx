import { titleToSlug } from '../../utils/titleToSlug';
import { concatQueryString } from '../../utils/concatQueryString';
import axiosClient from '../axiosClient';

export const configHeadersAuthenticate = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getStatistisOrder = async ({filter, search } = {}) => {
  const url = '/api/admin/statistics/order';
  const queryString = [];

  if (filter) {
    queryString.push(`filter=${filter}`);
  }
  const final_url = concatQueryString(queryString, url);
  console.log(final_url);
  const reponse = await axiosClient.get(final_url);
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};
export const getStatistisRevenue = async ({filter, search } = {}) => {
  const url = '/api/admin/statistics/revenue';
  const queryString = [];

  if (filter) {
    queryString.push(`filter=${filter}`);
  }
  const final_url = concatQueryString(queryString, url);
  console.log(final_url);
  const reponse = await axiosClient.get(final_url);
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};
export const getStatistisStaff = async ({filter, search } = {}) => {
  const url = '/api/admin/statistics/staff';
  const queryString = [];

  if (filter) {
    queryString.push(`filter=${filter}`);
  }
  const final_url = concatQueryString(queryString, url);
  console.log(final_url);
  const reponse = await axiosClient.get(final_url);
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};

export const getStatistisCategory = async ({filterStatus,filter, search } = {}) => {
  const url = '/api/admin/statistics/category-sell';
  const queryString = [];

  if (search) {
    queryString.push(`${filter}=${search}`);
  }
  if (filterStatus===1 || filterStatus===0) {
    queryString.push(`filter[status]=${filterStatus}`);
  }
  const final_url = concatQueryString(queryString, url);
  console.log(final_url);
  const reponse = await axiosClient.get(final_url);
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};
