import React from 'react';
import { concatQueryString } from '../../utils/concatQueryString';
import { titleToSlug } from '../../utils/titleToSlug';
import axiosClient from '../axiosClient';

export const configHeadersAuthenticate = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllStaffs = async ({ sort, filter,filterStatus, search, page } = {}) => {
  const url = '/api/admin/staff';
  const queryString = [];
  if (sort && sort.length > 0) {
    sort.forEach((item) => {
      queryString.push(`sort[${titleToSlug(item.key)}]=${item.value}`);
    });
  }
  if (search && filter) {
    queryString.push(`${filter}=${search}`);
  }
  if(filterStatus!=='All'){
    queryString.push(`status=${filterStatus}`);
  }
  if (page) {
    queryString.push(`page=${page}`);
  }
  const final_url = concatQueryString(queryString, url);
  //salert(final_url)
  const reponse = await axiosClient.get(final_url);
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};

export const getStaffById = async (id) => {
  const url = `/api/admin/staff/${id}`;
  const response = await axiosClient.get(url);
  if (response.status === 'success') {
    return response.data;
  } else if (response.status === 401) {
    return 401;
  } else {
    return {};
  }
};
export const addStaff = async (data) => {
  const url = '/api/admin/staff';
  const response = await axiosClient.post(url, data);
  if (response.status === 401) {
    return 401;
  } else if (response.status === 'success') {
    return 200;
  } else if (response.status === 500) {
    return 500;
  } else {
    return 404;
  }
};
