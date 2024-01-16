import axios from 'axios';

import { ENDPOINT } from '../apiConfig';
import { Modal } from 'antd';

export const USER_TOKEN = 'USER_TOKEN';

export const fetchToken = () => {
  const userToken = localStorage.getItem(USER_TOKEN);
  if (userToken) return true;
  return false;
};

export const storeToken = (token: string) => {
  try {
    localStorage.setItem(USER_TOKEN, token);
  } catch (error) {
    Modal.error({
      title: 'No Token detected.',
      content: 'An error occurred. Please try again later.',
    });
  }
};

export const removeToken = () => {
  try {
    localStorage.removeItem(USER_TOKEN);
    localStorage.removeItem('persist:root'); //clear redux persist state on logout
  } catch (error) {
    Modal.error({
      title: 'No Token detected.',
      content: 'An error occurred. Please try again later.' + error,
    });
    console.log('localStorage error during remove token:', error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logIn = ({ params }: any) => {
  return axios.post(ENDPOINT.login, params);
};

export const signUp = ({ params }: any) => {
  return axios.post(ENDPOINT.signup, params);
};

export const logOut = () => {
  try {
    removeToken();
  } catch (error) {
    console.log('localStorage error during remove token:', error);
  }
};

export const getUserByEmail = ({ params }: any) => {
  return axios.post(ENDPOINT.getUserByEmail, params);
};