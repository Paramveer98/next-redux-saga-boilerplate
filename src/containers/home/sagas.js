// import { take, put, call, fork, select } from 'redux-saga/effects';
// import {
//   GET_LATEST_TRACKS,
// } from './constants';
// import HomeService from './service';
// import {
//   getLatestTracksSuccess,
//   getLatestTracksFailure,
// } from './actions';
// import { homeData } from '../../layouts/redux/reducer';

// import { toast } from 'react-toastify';

// const latestTracksCall = topTracksCount => {
//   return new Promise((resolve, reject) => {
//     HomeService.getLatestTracks(topTracksCount).then((result = {}) => {
//       if (result.status === 200) {
//         result.json().then(result => {
//           resolve(result);
//         });
//       } else if (result.status === 400) {
//         result.json().then(result => {
//           reject(result.message);
//         });
//       } else if (result.status === 401) {
//         toast.error('You have been logged out, Please login again.');
//       }
//     });
//   });
// };

// function* watchRequestAllSongs() {
//   while (true) {
//     yield take(GET_LATEST_TRACKS);
//     const dataHome = yield select(homeData);
//     try {
//       const response = yield call(latestTracksCall, +(dataHome.top_tracks_count));
//       yield put(getLatestTracksSuccess(response));
//     } catch (error) {
//       yield put(getLatestTracksFailure(error));
//     }
//   }
// }
// export default function* root() {
//   yield fork(watchRequestAllSongs);
// }
