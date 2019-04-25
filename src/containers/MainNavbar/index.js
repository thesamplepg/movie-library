import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './index.scss';
import Search from './Search';

class MainNavbar extends Component {
    render() {
        return (
            <nav className="main-navbar">
                <div className="main-navbar_brand">
                    <div className="main-navbar_brand_container">
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                </div> 
                <Search />
            </nav>
        );
    }
}

export default MainNavbar;
