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

export const getAllCategory = async ({ sort, filter, search, page } = {}) => {
  const url = '/api/admin/category';
  const queryString = [];
  //   if (sort && sort.length > 0) {
  //     sort.forEach((item) => {
  //       queryString.push(`sort[${titleToSlug(item.key)}]=${item.value}`);
  //     });
  //   }
  //   if (search) {
  //     queryString.push(`search=${search}`);
  //   }
  //   if (page) {
  //     queryString.push(`page=${page}`);
  //   }
  const final_url = concatQueryString(queryString, url);
  const reponse = await axiosClient.get(final_url);
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};
