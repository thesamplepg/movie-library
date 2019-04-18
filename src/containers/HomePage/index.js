import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/movies';
import { hideLoader } from '../../store/actions/app';

import './index.scss';
import MainNavbar from '../MainNavbar';
import Header from './Header';

class HomePage extends Component {

    async componentDidMount() {
        await this.props.getMovies();

        this.props.hideLoader();
    }
    

    render() {
        let output = null;

        if(!this.props.loading) {

            output = (

                <div className="home-page">
                    <MainNavbar />
                    <Header 
                        configuration={this.props.configuration}
                        genres={this.props.genres}
                        movies={this.props.playingMovies.slice(0, 3)}
                    />
                </div>

            );

        }

        return output;
    }
}

export default connect( state => ({
    loading: !state.app.hideLoader,
    playingMovies: state.movies.nowPlaying,
    genres: state.app.genres,
    configuration: state.app.configuration
}), { getMovies, hideLoader } )(HomePage);
