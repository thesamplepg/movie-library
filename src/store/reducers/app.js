import * as actionType from '../actions/index';

const initalState = {
    isTypeMovies: true,
    configuration: null,
    genres: null,
    loader: true,
    hideLoader: false,
}

export default (state = initalState, action) => {

    switch ( action.type ) {
        case actionType.GET_CONFIGURATION + '_TRUE':
            return {
                ...state,
                configuration: action.payload.data
            }

        case actionType.GET_GENRES + '_TRUE': 
            return {
                ...state,
                genres: action.payload.data.genres
            }

        case actionType.SHOW_LOADER: return { ...state, loader: true, hideLoader: false }

        case actionType.HIDE_LOADER: return { ...state, hideLoader: true }

        case actionType.CLOSE_LOADER: return { ...state, loader: false }

        
        default: return state;
    }

}