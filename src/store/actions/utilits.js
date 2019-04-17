export const getData = async (url, type, dispatch) => {
    dispatch({ type });

    try {
        
        const res = await fetch(url);
        const data = await res.json();

        dispatch({
            type: type + '_TRUE',
            payload: { data }
        });

        return Promise.resolve();

    } catch (error) {
        console.log(error);

        dispatch({type: type + '_FALSE'});

        return Promise.resolve();
    }
}