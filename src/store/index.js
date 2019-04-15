import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from './middlewares/logger';

const middlewares = [thunk, logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;