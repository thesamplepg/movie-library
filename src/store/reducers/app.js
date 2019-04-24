import * as actionType from '../actions/index';

const initalState = {
    isTypeMovies: true,
    configuration: null,
    genres: null,
    configurationLoading: true,
    searchLoading: false,
    searchResults: [],
    searchPage: 1,
    searchQuery: '',
    searchType: 'movie'
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
                genres: action.payload.data.genres,
                configurationLoading: false
            }

        case actionType.SWITCH + '_MOVIES': return { ...state, isTypeMovies: true }

        case actionType.SWITCH + '_TVS': return { ...state, isTypeMovies: false }

        case actionType.INPUT_QUERY: return { ...state, searchQuery: action.payload.query }

        case actionType.SWITCH_SEARCH_TYPE: 
            return {
                ...state,
                searchType: action.payload.type
            }

        case actionType.SEARCH: return { ...state, searchLoading: true }

        case actionType.SEARCH + '_TRUE': 
            return {
                ...state,
                searchLoading: false,
                searchResults: action.payload.results
            }

        case actionType.NEXT_PAGE: return {...state, searchPage: state.searchPage + 1}

        case actionType.PREV_PAGE: return {...state, searchPage: state.searchPage - 1}
        
        default: return state;
    }

}