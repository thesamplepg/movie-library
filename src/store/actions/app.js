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

export const switcher = (type) => dispatch => {
    type === 'movies' ? 
    dispatch({ type: actionTypes.SWITCH + '_MOVIES'}) : 
    dispatch({ type: actionTypes.SWITCH + '_TVS'})
}

export const inputQuery = (query) => ({ type: actionTypes.INPUT_QUERY, payload: {query} }); 

export const switchSearchType = () => (dispatch, getState) => {
    const { searchType } = getState().app;
    
    dispatch({
        type: actionTypes.SWITCH_SEARCH_TYPE,
        payload: { type: searchType === 'movie' ? 'tv' : 'movie' }
    });
}

export const search = () => {
    return async function (dispatch, getState) {
        
        dispatch({ type: actionTypes.SEARCH });

        const { searchQuery, searchPage, searchType } = getState().app;

        const url = `https://api.themoviedb.org/3/search/${searchType}?api_key=${config.apiKey}&query=${searchQuery}&page=${searchPage}`;

        const res = await fetch(url);
        const data = await res.json();

        dispatch({ 
            type: actionTypes.SEARCH + '_TRUE', 
            payload: { results: data.results }
        });

    }
}

export const nextPage = () => ({type: actionTypes.NEXT_PAGE});

export const prevPage = () => ({type: actionTypes.PREV_PAGE});
