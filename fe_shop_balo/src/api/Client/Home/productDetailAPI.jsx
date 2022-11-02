import axiosClient from '../../axiosClient';


export const getDetailProductById = async (id) => {
  const url = `/api/client/product/${id}`;
  console.log(url)
  const response = await axiosClient.get(url);
  if (response.status === 'success') {
    return response.data;
  } else if (response.status === 500) {
    return 500;
  } else {
    return {};
  }
};
