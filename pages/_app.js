import React, { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { WP_API_URL, USER, APP_ENV } from "../config/index";
import Router from "next/router";
import createStore from "../src/store/store";
import { getCookie, removeCookie } from "../src/utility/cookie";
const dispatchStore = (store) => ({
  type: "DISPATCH_STORE",
  store,
});


class MyApp extends App {
  static async getInitialProps({ Component, ctx, ctx: { req } }) {
    let pageProps = {};
    let data;
    let user = getCookie(USER, req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    if (ctx.isServer) {
      //
    }
    return {
      pageProps,
      asPath: ctx.asPath,
      data,
      isServer: ctx.isServer,
      user
    };
  }
  state = {
    loadingClass: "",
  };

  componentDidMount() {
    const {
      store,
      store: { dispatch },
      data: dynamicData,
      isServer,
      user
    } = this.props;
    // dispatch(storeDynamicData(dynamicData));
    // this.addFetchInterceptor();
    // this.addNavigateEvent();
  }

  // addFetchInterceptor = () => {
  //   var originalFetch = fetch;
  //   fetch = function () {
  //     return originalFetch.apply(this, arguments).then(function (data) {
  //       if (data.status === 401) {
  //         toast.error("You have been logged out, Please login again.");
  //       }
  //       return data;
  //     });
  //   };
  // };

  // addNavigateEvent = () => {
  //   Router.events.on("routeChangeStart", this.onNavigateProgress);
  //   Router.events.on("routeChangeComplete", this.onNavigateDone);
  // };

  // onNavigateProgress = (url) => {
  //   const { store } = this.props;
  //   const { nanobar } = this.state;
  //   const user = (store.getState().auth || {}).user || null;
  //   nanobar && nanobar.go(40);
  //   const pageNavigationEvent = new CustomEvent("tr-link-clicked", {
  //     detail: {
  //       pageUrl: {
  //         current: window.location.pathname,
  //         new: url,
  //       },
  //       user: {
  //         id: user ? user.id : "",
  //         email: user ? user.user_email : "",
  //         name: user ? user.user_display_name : "",
  //         firstName: user ? user.first_name : "",
  //       },
  //       cart: Object.keys(store.getState().cart.cart || {}).length,
  //     },
  //   });

  //   document.dispatchEvent(pageNavigationEvent);

  //   this.setState({
  //     loadingClass: "navigate-Loading",
  //     // nanobar: true,
  //     // nanobarProgress: 40
  //   });
  // };

  // onNavigateDone = (url) => {
  //   const { store } = this.props;
  //   const { nanobar } = this.state;
  //   const user = (store.getState().auth || {}).user || null;
  //   nanobar && nanobar.go(100);
  //   const order = getCookie("Order", {});
  //   const pageNavigationDoneEvent = new CustomEvent("tr-page-loaded", {
  //     detail: {
  //       pageUrl: url,
  //       user: {
  //         id: user ? user.id : "",
  //         email: user ? user.user_email : "",
  //         name: user ? user.user_display_name : "",
  //         firstName: user ? user.first_name : "",
  //       },
  //       cart: Object.keys(store.getState().cart.cart || {}).length,
  //     },
  //   });

  //   document.dispatchEvent(pageNavigationDoneEvent);
  //   this.setState({
  //     loadingClass: "",
  //     // nanobarProgress: 100
  //   });

  //   if (order) {
  //     setInterval(() => {
  //       this.orderStatus();
  //     }, 15000);
  //   }
  // };

  render() {
    const { Component, pageProps, store, asPath, data: apiRes } = this.props;
    return (
      <Provider store={store}>
        <>
          <Component {...pageProps} asPath={asPath} />
        </>
      </Provider>
    );
  }
}
export default withRedux(createStore)(withReduxSaga(MyApp));
