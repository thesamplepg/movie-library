import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faArrowCircleLeft, faStar } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import { getDetalis } from '../../store/actions/detalis';
import Loader from '../../components/Loader';
import Icon from '../../components/Icon';
import Cast from './Cast';
import Vidoes from './Videos';
import Reviews from './Reviews';

class Detalis extends Component {

    
    componentWillMount() {  
        const [,, type, id] = this.props.location.pathname.split('/');
        
        if(this.props.detalis) {
            if(this.props.detalis.id === +id) {
                return false;
            }
        }

        this.props.getDetalis(type, id);
    }
    
    
    render() {
        let output = null;

        if(!this.props.loading) {
            const { base_url, backdrop_sizes, poster_sizes } = this.props.configuration.images;
            const { detalis } = this.props;

            let headerStyles = {
                background: `
                    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),
                    url('${base_url + backdrop_sizes[2]}/${detalis.backdrop_path}')
                    center 0% / cover
                `
            }

            const [ firstGenre, secondGengre ] = detalis.genres;

            output = (
                <div className="detalis">
                    <div className="detalis_header" style={headerStyles}>
                        <Icon clicked={this.props.history.goBack} icon={ faArrowCircleLeft }/>        
                    </div>
                    <main className="detalis_main">
                        <div className="detalis_main_information">
                            <img 
                                src={`${base_url + poster_sizes[1]}/${detalis.poster_path}`} 
                                alt="poster"
                            />
                            <div className="info-detalis">
                                <div className="info-detalis_title">
                                    {detalis.original_title ? detalis.original_title : detalis.original_name}
                                </div>
                                <div className="info-detalis_rating">
                                    <Icon icon={ faStar }/> { detalis.vote_average }
                                </div>
                                <div className="info-detalis_country">
                                    { detalis.status } | { detalis.original_language }
                                </div>
                                <div className="info-detalis_genres">
                                    {firstGenre.name} / {secondGengre.name}
                                </div>
                            </div>
                        </div>
                        <div className="detalis_main_overview">
                            { detalis.overview }
                        </div>
                        <Cast 
                            cast={this.props.casts}
                            configuration={this.props.configuration}
                        />
                        <Vidoes 
                            videos={this.props.videos}
                            configuration={this.props.configuration}
                        />
                        <Reviews 
                            reviews={this.props.reviews}
                        />
                    </main>
                </div>
            )
        }

        return (
            <React.Fragment>
                <Loader loading={this.props.loading}/>
                { output }
            </React.Fragment>
        );
    }
}

const dispatchs = {
    getDetalis
}

export default connect( state => ({
    detalis: state.detalis.detalis,
    casts: state.detalis.casts,
    videos: state.detalis.videos,
    reviews: state.detalis.reviews,
    loading: state.detalis.loading,
    configuration: state.app.configuration,
    genres: state.app.genres
}) , dispatchs )(Detalis);
