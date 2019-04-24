import React from 'react';
import { faTv, faFilm } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../components/Icon';

const TypeSwitcher = ({ switchSearchType, type }) => {
    const buttons = [{title: 'movie', icon: faFilm}, {title: 'tv', icon: faTv}];

    return (
        <div className="search_type-switcher">
            {
                buttons.map((button) => {
                    return (
                        <button
                            onClick={switchSearchType} 
                            key={button.title} 
                            disabled={type === button.title}
                            className={type === button.title ? 'disabled' : null}
                        >
                            <Icon icon={button.icon}/>
                            {button.title}
                        </button>
                    );
                })
            }
        </div>
    );
}

export default TypeSwitcher;
