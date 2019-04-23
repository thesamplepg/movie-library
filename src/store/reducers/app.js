import * as actionType from '../actions/index';

const initalState = {
    isTypeMovies: true,
    configuration: null,
    genres: null
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

        case actionType.SWITCH + '_MOVIES': return { ...state, isTypeMovies: true }

        case actionType.SWITCH + '_TVS': return { ...state, isTypeMovies: false }

        
        default: return state;
    }

}