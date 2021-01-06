// resource for handling cookies taken from here:
// https://github.com/carlos-peru/next-with-api/blob/master/lib/session.js

import cookie from 'js-cookie';
import { USER } from '../../config';

export const setCookie = (key, value) => {
  if (process.browser) {
    let details = { billing: { ...value.details.billing } };
    delete value.details;
    cookie.set(
      key,
      { ...value, details },
      {
        expires: 1,
        path: '/'
      }
    );
  }
};

export const setPlayerCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};

export const setOrderCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};

export const setCartCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};

export const setSelectedPlaylistCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

export const setRefCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 30,
      path: '/'
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  } else {
    try {
      JSON.parse(req.cookies[USER])
    } catch {
      return undefined;
    }
  }
  return req.cookies[USER];
};
