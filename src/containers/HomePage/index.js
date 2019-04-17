import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayingMovies } from '../../store/actions/movies';
import { hideLoader } from '../../store/actions/app';
import MainHeader from '../../containers/MainHeader/index';
import HomeHeader from './HomeHeader';

class HomePage extends Component {

    async componentDidMount() {
        await this.props.getPlayingMovies();
        
        this.props.hideLoader();
    }
    

    render() {

        let output = null;

        if(!this.props.loader) {
            output = (
                <React.Fragment>
                    <MainHeader />
                    <HomeHeader 
                        configuration={this.props.configuration}
                        genres={this.props.genres}
                        movies={this.props.nowPlayingMovies.slice(0, 3)}
                    />
                </React.Fragment>
            )
        } 

        return output;
    }
}

const dispatches = {
    getPlayingMovies, hideLoader
}

export default connect( state => ({

    configuration: state.app.configuration,
    genres: state.app.genres,
    loader: !state.app.hideLoader,
    nowPlayingMovies: state.movies.nowPlaying
    
}), dispatches )(HomePage);
