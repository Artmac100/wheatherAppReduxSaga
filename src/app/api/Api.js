import axios from 'axios';

import config from './config';
import history from '../history';

export const signUpPost = ({ username, email, password }) =>
  axios.post(`${config.apiUrl}/signup`, { username, email, password });

export const loginPost = ({ username, password }) =>
  axios.post(`${config.apiUrl}/login`, { username, password });

export const fetchUserData = () => {
  if (window.localStorage.getItem('token')) {
    const token = JSON.parse(window.localStorage.getItem('token'));
    const opt = {
      headers: {
        'x-authorization-token': `bearer ${token}`,
      },
    };
    return axios.get(`${config.apiUrl}/getuserdata`, opt);
  }
  return false;
};

export const redirect = route => history.push(route);
