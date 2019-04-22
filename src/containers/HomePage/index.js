import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../store/actions/movies';
import { getTvShows } from '../../store/actions/tvShows';
import { hideLoader, showLoader, switcher } from '../../store/actions/app';
import Swiper from 'swiper';

import './index.scss';
import MainNavbar from '../MainNavbar';
import Header from './Header';
import Movies from './Movies';
import TvShows from './TvShows';

class HomePage extends PureComponent {

    state = {
        slides: 7
    }

    async componentDidMount() {
        await this.props.getMovies();

        this.adaptiveHandler();

        this.props.hideLoader();
    }

    adaptiveHandler = () => {
        const width = window.innerWidth;

        if(width < 380) this.setState({slides: 3}); 
        else if(width < 875) this.setState({slides: 4});
        else if(width < 1000) this.setState({slides: 5});
        else if(width < 1200) this.setState({slides: 6});
    }

    switchToTvs = () => {
        this.props.showLoader();
        
        if(!this.props.received) {
            this.props.getTvShows()
                .then(() => {
                    this.props.hideLoader();
                });
        } else {
            setTimeout(() => {   
                this.props.hideLoader();
            }, 1000);
        }

        this.props.switcher('tvs');
    }

    switchToMovies = async() => {
        if(!this.props.isTypeMovies) {
            this.props.showLoader();
            this.props.switcher('movies');
            
            setTimeout(() => {
                this.props.hideLoader();
            }, 1000);
        }
    }
    

    render() {

        new Swiper('.items-carousel', {
            slidesPerView: this.state.slides,
            loop: true
        });

        let output = null;

        if(!this.props.loading) {

            output = (

                <div className="home-page">
                    <MainNavbar />
                    <Header 
                        configuration={this.props.configuration}
                        genres={this.props.genres}
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

        return output;
    }
}

const dispaths = {
    getMovies, 
    getTvShows, 
    hideLoader, 
    showLoader,
    switcher
}

export default connect( state => ({
    loading: !state.app.hideLoader,
    playingMovies: state.movies.nowPlaying,
    onAirTvShows: state.tvShows.onTheAir,
    genres: state.app.genres,
    configuration: state.app.configuration,
    isTypeMovies: state.app.isTypeMovies,
    received: state.tvShows.received
}), dispaths )(HomePage);
