import * as actionTypes from './index';

import config from '../../configs';

export const getTvShows = () => async(dispatch) => {

    dispatch({type: actionTypes.GET_TV_SHOWS});

    const tvCategories = ['on_the_air', 'airing_today', 'popular', 'top_rated'];
    const tvShows = {};

    for(let i = 0; i < tvCategories.length; i++) {
        const category = tvCategories[i];
        
        const url = `https://api.themoviedb.org/3/tv/${category}?api_key=${config.apiKey}&page=1`;
        
        const promise = fetch(url)
        .then(response => response.json())
        .then(data => {
            tvShows[category] = data.results;

            if(Object.keys(tvShows).length === tvCategories.length) {

                dispatch({
                     type: actionTypes.GET_TV_SHOWS + '_TRUE', 
                     payload: tvShows 
                });

                return Promise.resolve();
            }
        });

        if(i === tvCategories.length - 1) return promise;
    }

}


