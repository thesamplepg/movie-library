import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../../components/Icon';
import getGenre from './getGenre';

const Slide = (props) => {
    
    const { base_url, backdrop_sizes } = props.configuration.images;

    const style = {
        background: `
            linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),
            url('${base_url + backdrop_sizes[2]}/${props.backdrop_path}')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%'
    }

    return (
        <div style={style} className="swiper-slide">
            <div className="swiper-slide_movie-category">NOW PLAYING</div>
            <dir className="swiper-slide_movie-title">{props.original_title}</dir>
            <div className="swiper-slide_movie-information">
                <div className="swiper-slide_movie-information_genre">
                    {getGenre(props.genre_ids, props.genres)}
                </div> |
                <div className="swiper-slide_movie-information_movie-rating">
                    <Icon icon={ faStar } />
                    {props.vote_average} rating
                </div>
            </div>
        </div>
    );
}

export default Slide;
