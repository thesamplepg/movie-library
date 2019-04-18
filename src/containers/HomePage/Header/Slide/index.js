import React from 'react';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import { getGenres } from '../../../../utilits/index'; 
import Icon from '../../../../components/Icon';

const Slide = (props) => {

    const baseUrl = props.configuration.images.base_url;
    const size = props.configuration.images.backdrop_sizes[2];

    const imageUrl = `${baseUrl + size}/${props.backdrop_path}`;

    const styles = {
        background: `
            linear-gradient(rgba(0, 0, 0, .6), rgba( 0, 0, 0, .6)),
            url('${imageUrl}')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%'
    }

    return (
        <Link to={`/movie/${props.id}`} className="swiper-slide" style={styles}>
            <div className="movie-category">
                NOW PLAYING
            </div>
            <div className="movie-title">
                {props.original_title}
            </div>
            <div className="movie-information">
                <div className="movie-information_genre">
                    { getGenres(props.genres, props.genre_ids)[0] }  /
                </div>
                <div className="movie-information_rating">
                    <Icon icon={ faStar } /> {props.vote_average}
                </div>
            </div>
        </Link>
    );
}

export default Slide;
