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

export const getAllStaffs = async ({ sort,filterStatus,filterRole,filter, search, page } = {}) => {
  const url = '/api/admin/staff';
  const queryString = [];
  if (sort && sort.length > 0) {
    sort.forEach((item) => {
      queryString.push(`sort[${titleToSlug(item.key)}]=${item.value}`);
    });
  }
  if (search) {
    queryString.push(`${filter}=${search}`);
  }
  if (page) {
    queryString.push(`page=${page}`);
  }

  if (filterStatus===1 || filterStatus===0) {
    // console.log(`filterStatus:`, filterStatus);
    queryString.push(`filter[status]=${filterStatus}`);
  }
  if (filterRole) {
    queryString.push(`filter[category_id]=${filterRole}`);
  }
  if (page) {
    queryString.push(`page=${page}`);
  }
  const final_url = concatQueryString(queryString, url);
 // console.log(final_url)
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
export const addStaff = async (body) => {
  const url = '/api/admin/staff';
  const response = await axiosClient.post(url, body);

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

export const editStaff = async (id, body) => {
  const url = `/api/admin/staff/${id}`;
  const response = await axiosClient.put(url, body);
  console.log(response)
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
export const deleteStaff = async (id) => {
  const url = `/api/admin/staff/${id}`;
  const response = await axiosClient.delete(url);
  console.log(response)
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