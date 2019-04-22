import * as actionTypes from '../actions/index';

const initalState = {
    upcoming: null,
    popular: null,
    nowPlaying: null,
    topRated: null
}

export default (state = initalState, action) => {

    switch ( action.type ) {

        case actionTypes.GET_MOVIES + '_TRUE':
            
            const { now_playing, top_rated, popular, upcoming } = action.payload;
        
            return {
                ...state,
                nowPlaying: now_playing,
                topRated: top_rated,
                popular, upcoming
            }
        
        default: return state;
    }

}