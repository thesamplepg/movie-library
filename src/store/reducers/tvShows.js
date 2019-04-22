import * as actionTypes from '../actions/index';

const initalState = {
    airingToday: null,
    popular: null,
    onTheAir: null,
    topRated: null,
    received: false
}

export default (state = initalState, action) => {

    switch ( action.type ) {

        case actionTypes.GET_TV_SHOWS + '_TRUE':
            
            const { airing_today, top_rated, popular, on_the_air } = action.payload;
        
            return {
                ...state,
                popular,
                airingToday: airing_today,
                topRated: top_rated,
                onTheAir: on_the_air,
                received: true
            }
        
        default: return state;
    }

}