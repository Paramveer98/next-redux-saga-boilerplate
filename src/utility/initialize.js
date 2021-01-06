import Router from 'next/router';
import { getCookie } from './cookie';
// import { authenticate } from '../containers/signin/actions';
import { USER as APP_USER } from '../../config';

// checks if the page is being loaded on the server, and if so, get auth user from the cookie:
export default function Initialize(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      const user = getCookie(APP_USER, ctx.req);
      // ctx.store.dispatch(authenticate(user ? JSON.parse(user) : user));
    }
  } else {
    const user = ctx.store.getState().auth.user;
    if (user && (ctx.pathname === '/log-in' || ctx.pathname === '/signup')) {
      setTimeout(function() {
        Router.push('/');
      }, 0);
    }

    // if (!user && ctx.pathname === '/checkout') {
    //   setTimeout(function() {
    //     Router.push('/log-in');
    //   }, 0);
    // }
  }
}
