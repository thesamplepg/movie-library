import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.scss';
import Icon from '../../../components/Icon';
import { inputQuery } from '../../../store/actions/app';

class Search extends Component {

    state = {
        value: ''
    }

    inputHandler = (e) => {
        this.setState({value: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();

        if(this.state.value.length > 0) {
            this.props.history.push(`/search/${this.state.value}`);
            this.props.inputQuery(this.state.value);
        }
    }

    render() {
        return (
            <form className="main-navbar_search">
                <input 
                    type="text" 
                    placeholder="Search movie" 
                    value={this.state.value}
                    onChange={this.inputHandler}
                /> 
                <button 
                    type="submit" 
                    className="main-navbar_search_submit-button"
                    onClick={this.submitHandler}
                >
                    <Icon icon={ faSearch } />
                </button>  
            </form>
        );
    }
}

export default connect( state => ({
    page: state.app.searchPage
}), { inputQuery } )(withRouter(Search));

