import { combineReducers } from 'redux';

import app from './app';
import movies from './movies';
import tvShows from './tvShows';
import detalis from './detalis';

export default combineReducers({
    app, movies, tvShows, detalis
});