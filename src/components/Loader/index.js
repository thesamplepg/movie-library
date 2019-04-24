import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../Icon';

const Loader = ({ loading }) => {
    
    const classes = ['full-screen_loader', !loading ? 'hide' : '']

    return (
        <div 
            className={classes.join(' ')}
        >
            <Icon icon={ faSpinner } />
        </div>
    );
}

export default Loader;
