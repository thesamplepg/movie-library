import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './index.scss';
import NavBar from './NavBar';
import Search from './Search';

class MainHeader extends Component {
    render() {
        return (
            <div className="main-header">
                <div className="main-header_brand">
                    <div className="main-header_brand_container">
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                </div> 
                <Search />
                <NavBar />
            </div>
        );
    }
}

export default MainHeader;
