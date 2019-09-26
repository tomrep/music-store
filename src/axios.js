import axios from 'axios';

/* eslint-disable-next-line import/no-mutable-exports */
export let instance;
export const initializeAxios = () => {
  instance = axios.create();

  instance.interceptors.response.use(
    response => response.data,

    error => Promise.reject(error.response || error.message)
  );
  // instance.interceptors.request.use(
  //   config => {
  //     if (globals) {
  //       globals.setLoadingsAction(true);
  //     }
  //     config.headers['Access-Control-Allow-Origin'] = '*';
  //     return config;
  //   },

  //   error => Promise.reject(error)
  // );
};
export default instance;
