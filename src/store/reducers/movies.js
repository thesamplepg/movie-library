import * as actionType from '../actions/index';

const initalState = {
    nowPlaying: null
}

export default (state = initalState, action) => {

    switch ( action.type ) {
        case actionType.GET_NOW_PLAYING_MOVIES + '_TRUE':
            return {
                ...state,
                nowPlaying: action.payload.data.results
            }

        
        default: return state;
    }

}