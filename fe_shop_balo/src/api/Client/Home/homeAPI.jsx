import axiosClient from '../../axiosClient';
// import { getCookies } from '../Auth';

// export const configHeadersAuthenticate = () => {
//   const token = getCookies('token');
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

export const getAllSlider = async () => {
  const url = '/api/client/slider';

  const response = await axiosClient.get(url);

  if (response.status === 200) {
    return response.data;
  } else {
    return 401;
  }
};

export const getAllCategory = async () => {
  const url = '/api/client/category';

  const response = await axiosClient.get(url);

  if (response.status === 200) {
    return response.data;
  } else {
    return 401;
  }
};
