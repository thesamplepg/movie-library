import { combineReducers } from 'redux';

import app from './app';
import movies from './movies';
import tvShows from './tvShows';

export default combineReducers({
    app, movies, tvShows
});