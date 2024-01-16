import { message } from 'antd'
import axios from 'axios'

import { removeToken } from './api/auth'
// import { removeToken } from './api/auth';
import { baseURL, ENDPOINT } from './apiConfig'
const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Content-Security-Policy': 'default-src \'self\''
  }
})

AxiosInstance.interceptors.request.use(
  async (config) => {
    // fetch token before request is sent
    const userToken = localStorage.getItem('USER_TOKEN')

    // if (userToken) {
    //   axios
    //     .post(ENDPOINT.verifyToken, {
    //       token: userToken,
    //     })
    //     .then((response) => {
    //       // console.log('axios instance response', response);
    //     })
    //     .catch((error) => {
    //       // console.log('axios instance error', error);
    //     //   config.cancelToken = new axios.CancelToken((cancel) =>
    //     //     cancel('Your token has expired. Please login again.')
    //     //   );
    //       removeToken();
    //     });
    // } else {
    //   // config.cancelToken = new axios.CancelToken((cancel) =>
    //   //   cancel('Your token has expired. Please login again.')
    //   // );
    // }

    // config.headers.authorization = 'Bearer ' + userToken;
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

AxiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (axios.isCancel(error)) {
      message.error(error.message)

      return false
    } else if (!error.response) {
      return false
    } else {
      return Promise.reject(error)
    }
  }
)

export default AxiosInstance
