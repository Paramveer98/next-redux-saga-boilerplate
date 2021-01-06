import {
  GET_LATEST_TRACKS,
  GET_LATEST_TRACKS_SUCCESS,
  GET_LATEST_TRACKS_FAILURE
} from './constants';
import { deepClone } from '../../utility/utils';

const initialState = {
  isLoading: false,
  errorMessage: '',
  playlists: [],
  isLoadingPlaylist: false,
  store: {},
  dynamicHome: {},
  songs: [],
  found: true
};

// const getUpdatedSongs = (songs, songID) => {
//   const songsClone = deepClone(songs);
//   return songsClone.map(s => {
//     if (s.id === songID) {
//       s.song.in_wishlist = !s.song.in_wishlist;
//     }
//     return s;
//   });
// };



const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_TRACKS:
      return {
        ...state,
        isLoading: true
      };
    case GET_LATEST_TRACKS_SUCCESS:
      return {
        ...state,
        songs: action.res.data,
        isLoading: false,
        found: !!action.res.data.length
      };
    case GET_LATEST_TRACKS_FAILURE:
      return {
        ...state,
        failureMesage: action.err,
        isLoading: false
      };
    case 'DISPATCH_STORE':
      return {
        ...state,
        store: action.store
      };
    default:
      return state;
  }
};

export const getHomeSongs = state => state.home.songs;

export default homeReducer;
