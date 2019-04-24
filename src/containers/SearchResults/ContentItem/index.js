import React from 'react';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import Icon from '../../../components/Icon';

const ContentItem = (props) => {
    return (
        <Link className="content-item" to={`/detalis/${props.type}/${props.id}`}>
            <img src={`${props.baseUrl}/${props.poster_path}`} alt="poster" />
            <div className="content-item_title">
                { props.original_name ? props.original_name : props.original_title }
            </div>
            <div className="content-item_genres">
                {props.genres.join(' / ')}
            </div>
            <div className="content-item_rating">
                <Icon icon={ faStar } />
                {props.vote_average}
            </div>
        </Link>
    );
}

export default ContentItem;
