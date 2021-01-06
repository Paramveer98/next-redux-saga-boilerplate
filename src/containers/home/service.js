// import {
//   WOO_API_URL,
//   WP_API_URL,
//   USER,
//   top_tracks_count
// } from '../../../config';
// import getOAuth from '../../utility/oAuth1a';
// import { getCookie } from '../../utility/cookie';

// const LatestTracks = {
//   getLatestTracks: async (topTracksCount = 5, req = null) => {
//     const url = `${WP_API_URL}/songs?per_page=${topTracksCount ||
//       top_tracks_count}&order=desc&orderby=wlk_wish_count`;
//     let user = getCookie(USER, req);
//     if (user) {
//       user = JSON.parse(user);
//     }

//     function getHeader() {
//       if (user) {
//         return {
//           Authorization: `Bearer ${user.token}`
//         };
//       } else {
//         return {};
//       }
//     }

//     return fetch(url, {
//       method: 'GET',
//       headers: getHeader()
//     })
//       .then(function(response) {
//         return response;
//       })
//       .catch(err => console.log(err));
//   }
// };

// export default LatestTracks;
