import axiosClient from '../../axiosClient';


export const getRatingWithProductID = async (id) => {
  const url = `/api/client/rating?filter=${id}`;
  //console.log(url)
  const response = await axiosClient.get(url);

  if (response.status === 200) {
    return response.data;
  } else if (response.status === 500) {
    return 500;
  } else {
    return {};
  }
};
