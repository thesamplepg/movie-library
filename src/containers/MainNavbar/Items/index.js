import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faCompass } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../components/Icon';

const Items = () => {
    return (
        <ul className="main-navbar_navbar">
            <li className="main-navbar_navbar_item">
                <Link to="/">
                    <Icon icon={ faHome }/>
                </Link>
            </li>
            <li className="main-navbar_navbar_item">
                <Link to="/discover">
                    <Icon icon={ faCompass }/>
                </Link>
            </li>
        </ul>
    );
}

export default Items;
