import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/movies';
import { getTvShows } from '../../store/actions/tvShows';
import { switcher } from '../../store/actions/app';
import Swiper from 'swiper';

import './index.scss';
import Loader from '../../components/Loader';
import MainNavbar from '../MainNavbar';
import Header from './Header';
import Movies from './Movies';
import TvShows from './TvShows';

class HomePage extends PureComponent {

    state = {
        slides: 7,
        rerenders: 1
    }

    componentDidMount() {
        if(!this.props.fetched) this.props.getMovies();
        else {
            //force reRender
            this.setState({rerenders: this.state.rerenders + 1});
        }
    }

    switchToTvs = async() => {
        if(!this.props.received) {
            this.props.getTvShows();
        } 

        this.props.switcher('tvs');
    }

    switchToMovies = async() => {
        if(!this.props.isTypeMovies) {
            this.props.switcher('movies');
        }
    }
    

    componentDidUpdate() {
        if(!this.props.loading) {
            new Swiper('.items-carousel', {
                slidesPerView: 7,
                loop: true,
                breakpoints: {
                    1200: { slidesPerView: 6 },
                    1000: { slidesPerView: 5 },
                    875: { slidesPerView: 4 },
                    385: { slidesPerView: 3 }
                }
            });
        }
    }

    render() {

        let output = null;

        if(this.props.isTypeMovies ? !this.props.movieLoading : !this.props.tvLoading) {

            output = (
                <div className="home-page">
                    <MainNavbar />
                    <Header 
                        configuration={this.props.configuration}
                        genres={this.props.genres}
                        isTypeMovies={this.props.isTypeMovies}
                        content={
                            this.props.isTypeMovies ? 
                            this.props.playingMovies.slice(0, 3) :
                            this.props.onAirTvShows.slice(0, 3)
                        }
                    />
                    <div className="home-page_switcher">
                        <div className="switcher" onClick={this.switchToMovies}>
                            <span>movies</span>
                        </div>
                        <div className="switcher" onClick={this.switchToTvs}>
                            <span>tv shows</span>
                        </div>
                    </div>
                    <div className="home-page_content">
                        {
                            this.props.isTypeMovies ?
                            <Movies genres={this.props.genres}/> :
                            <TvShows genres={this.props.genres}/>
                        }
                    </div>
                </div>

            );

        }

        return (
            <React.Fragment>
                <Loader 
                    loading={this.props.isTypeMovies ? this.props.movieLoading : this.props.tvLoading}
                />
                { output }
            </React.Fragment>
        )
    }
}

const dispaths = {
    getMovies, 
    getTvShows, 
    switcher
}

export default connect( state => ({
    movieLoading: state.movies.loading,
    tvLoading: state.tvShows.loading,
    playingMovies: state.movies.nowPlaying,
    onAirTvShows: state.tvShows.onTheAir,
    genres: state.app.genres,
    configuration: state.app.configuration,
    isTypeMovies: state.app.isTypeMovies,
    received: state.tvShows.received,
    fetched: state.movies.fetched
}), dispaths )(HomePage);
