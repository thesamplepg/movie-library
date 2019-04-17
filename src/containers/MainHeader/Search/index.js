import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../components/Icon';

class Search extends Component {

    state = {
        value: ''
    }

    inputHandler = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <form className="main-header_search">
                <input 
                    type="text" 
                    placeholder="Search movie" 
                    value={this.state.value}
                    onChange={this.inputHandler}
                /> 
                <button type="submit" className="main-header_search_submit-button">
                    <Icon icon={ faSearch } />
                </button>  
            </form>
        );
    }
}

export default Search;

