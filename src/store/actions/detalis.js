import * as actionTypes from './index';
import config from '../../configs';


const getUrl = (type, id, additional) => {
    return !additional ? 
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${config.apiKey}`:
        `https://api.themoviedb.org/3/${type}/${id}/${additional}?api_key=${config.apiKey}`
}

export const getDetalis = (type, id) => async dispatch => {
    
    dispatch({ type: actionTypes.GET_DETALIS});

    const data = {};
    const options = ['credits', 'videos', 'reviews'];

    const res = await fetch(getUrl(type, id));
    const detalis = await res.json();

    data.detalis = detalis;

    for(let index = 0; index < options.length; index++) {
        const option = options[index];

        fetch(getUrl(type, id, option))
            .then(res => res.json())
            .then(res => {
                data[option] = res;

                if(index === options.length - 1) {
                    dispatch({
                        type: actionTypes.GET_DETALIS + '_TRUE',
                        payload: data
                    });
                }
            })
    }


} 