import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import Icon from '../../Icon';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const type = props.original_title ? 'movie' : 'tv'

    return (
        <Link className="swiper-slide" to={`detalis/${type}/${props.id}`}>
            <div className="item_image-wrapper">
                <img src={props.baseUrl + props.poster_path} alt="poster" />
                <div className="item_image-wrapper_rating">
                    <Icon icon={ faStar } />
                    {props.vote_average}
                </div>
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
