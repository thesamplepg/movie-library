export default store => next => action => {
    
    if(typeof action === 'function')
    {
        console.log('--[ THUNK ]--');
    }
    else {
        console.log('--[ DISPATCH ]--');
    }

    return next(action);
}