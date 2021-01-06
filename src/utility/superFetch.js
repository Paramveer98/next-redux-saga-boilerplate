import fetch from 'isomorphic-unfetch';
import { WP_API_URL } from '../../config';
export const customHeader = () => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: (() => {
    //   const user = localStorage.getItem(config.user);
    //   let user = user && JSON.parse(user).user;
    //   switch (api) {
    //     default:
    //       return `Bearer ${user}`;
    //   }
    // })()
  };
};
const base = (method, url, data = {}) => {
  let body = undefined;
  if (method !== 'get') {
    body = JSON.stringify(data);
  }
  const DYNAMIC_URL = url.includes('action')
    ? `${WP_API_URL}${url}`
    : `${WP_API_URL}/${url}`;
  return fetch(DYNAMIC_URL, {
    method,
    headers: customHeader(),
    body
  })
    .then(res => res)
    .catch(error => error);
};

const SuperFetch = {};

['get', 'post', 'put', 'delete'].forEach(method => {
  SuperFetch[method] = base.bind(null, method);
});

export default SuperFetch;
