import React from 'react';

import './index.scss';

const Loader = ({ isHide }) => {
    return (
        <div className={['full-screen_loader', isHide ? 'full-screen_loader--hide' : ''].join(' ')}>
            <div className="pulsor">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
