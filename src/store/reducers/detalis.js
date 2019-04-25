import * as actionTypes from '../actions/index';

const initalState = {
    detalis: null,
    loading: true,
    casts: null,
    videos: null,
    reviews: null
}

export default (state = initalState, action) => {

    switch ( action.type ) {

        case actionTypes.GET_DETALIS: return { ...state, loading: true }

        case actionTypes.GET_DETALIS + '_TRUE':

            return {
                ...state, 
                detalis: action.payload.detalis,
                casts: action.payload.credits.cast,
                videos: action.payload.videos.results.slice(0, 6),
                reviews: action.payload.reviews.results,
                loading: false
            }
        
        default: return state;
    }

}