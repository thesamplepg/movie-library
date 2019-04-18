import * as actionTypes from './index';

import config from '../../configs';

export const getMovies = () => async(dispatch) => {

    dispatch({type: actionTypes.GET_MOVIES});

    const moviesCategories = ['now_playing', 'upcoming', 'popular', 'top_rated'];
    const movies = {};

    for(let i = 0; i < moviesCategories.length; i++) {
        const category = moviesCategories[i];
        
        const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${config.apiKey}&page=1`;
        
        const promise = fetch(url)
        .then(response => response.json())
        .then(data => {
            movies[category] = data.results;

            if(Object.keys(movies).length === moviesCategories.length) {

                dispatch({
                     type: actionTypes.GET_MOVIES + '_TRUE', 
                     payload: movies 
                });

                return Promise.resolve();
            }
        });

        if(i === moviesCategories.length - 1) return promise;
    }

}


