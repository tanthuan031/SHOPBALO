import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { ErrorToast, SuccessToast } from '../../components/Layouts/Alerts';
import { setIsLogin } from '../../redux/reducer/auth/auth.reducer';
import axiosClient from '../axiosClient';
export const setCookies = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
export const getCookies = (cname) => {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  if (decodedCookie) {
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }

  return '';
};
export const deleteCookie = (name) => {
  document.cookie = setCookies(name, '', -1);
};
export const configHeadersAuthenticate = () => {
  const token = getCookies('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const handleLogin = async (body) => {
  const url = 'api/admin/login';
  const response = await axiosClient.post(url, body);

  return response;
};
export const handleGetInformation = async () => {
  const response = await axiosClient.get('api/admin/me', configHeadersAuthenticate());
  if (response.status === 401) {
    return 401;
  }

  if (response.status === 'success') {
    return response.data;
  }
};

export const logout = async () => {
  const response = await axiosClient.post('api/admin/logout', {}, configHeadersAuthenticate());

  const { status } = response;

  switch (status) {
    case 'success':
      SuccessToast('Logout successfully', 1000);
      // localStorage.removeItem('token');
      // setTimeout(() => {
      //   window.location.href = '/admin/login';
      // }, 1000);
      return 200;
      break;
    case 401:
      Notiflix.Block.remove('.modal-content');
      return 401;
    default:
      ErrorToast(3500, 'Server error. Please try again');
      Notiflix.Block.remove('.modal-content');
      return 500;
  }
};
