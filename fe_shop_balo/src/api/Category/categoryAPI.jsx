import { concatQueryString } from "../../utils/concatQueryString";

import axiosClient from "../axiosClient";



export const configHeadersAuthenticate = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const getAll = async ({ sort_id, search, status, page } = {}) => {
    const url = '/api/admin/category';
    const queryString = [];
    if (sort_id) queryString.push(`_sort_id=${sort_id}`);
    if (search) queryString.push(`_search=${search}`);
    if (status) queryString.push(`_status=${status}`);
    if (page) queryString.push(`page=${page}`);

    const final_url = concatQueryString(queryString, url);
    const reponse = await axiosClient.get(final_url);

    if (reponse.status === 200) {
        return reponse.data;
    } else {
        return 401;
    }

}
export const addCategory = async (data) => {
    const url = '/api/admin/category';

    const reponse = await axiosClient.post(url, data);

    if (reponse.status === 200) {
        return reponse;
    } else {
        return 401;
    }
}