import * as actionTypes from './index';
import { getData } from './utilits';

import config from '../../configs';

export const getConfiguration = () => dispatch => {
    const url = `https://api.themoviedb.org/3/configuration?api_key=${config.apiKey}&language=en-US&page=1`;

    return getData(url, actionTypes.GET_CONFIGURATION, dispatch);
}

export const getGenres = () => dispatch => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.apiKey}`;

    return getData(url, actionTypes.GET_GENRES, dispatch);
}

export const showLoader = () => ({ type: actionTypes.SHOW_LOADER });

export const hideLoader = () => dispatch => {

    dispatch({type: actionTypes.HIDE_LOADER});

    setTimeout(() => dispatch({ type: actionTypes.CLOSE_LOADER }), 500);

};