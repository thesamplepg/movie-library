import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import Icon from '../../Icon';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    return (
        <Link className="swiper-slide" to={`/movie/${props.id}`}>
            <img src={props.baseUrl + props.poster_path} alt="poster" />
            <div className="item-rating">
                <Icon icon={ faStar } />
                {props.vote_average}
            </div>
            <div className="item-title">
                {props.original_title ? props.original_title : props.original_name}
            </div>
            <div className="item-genres">
                {props.genres.join(' / ')}
            </div>
        </Link>
    );
}

export default Item;
