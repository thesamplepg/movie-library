import { combineReducers } from 'redux';

import app from './app';
import movies from './movies';

export default combineReducers({
    app, movies
});