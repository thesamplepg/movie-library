import * as actionTypes from './index';
import { getData } from './utilits';

import config from '../../configs';

export const getPlayingMovies = () => dispatch => {

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.apiKey}&page=1`;

    return getData(url, actionTypes.GET_NOW_PLAYING_MOVIES, dispatch);

}
