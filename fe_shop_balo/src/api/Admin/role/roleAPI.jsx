import { titleToSlug } from '../../../utils/titleToSlug';
import { concatQueryString } from '../../../utils/concatQueryString';
import axiosClient from '../../axiosClient';
import { configHeadersAuthenticate } from '../Staff/staffAPI';


export const getAllRole = async ({ sort, filter, search, page } = {}) => {
  const url = '/api/admin/role';
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

  const final_url = concatQueryString(queryString, url);

  const reponse = await axiosClient.get(final_url, configHeadersAuthenticate());
  if (reponse.status === 401) {
    return 401;
  } else if (reponse.status === 'success') {
    return reponse.data;
  } else {
    return 500;
  }
};