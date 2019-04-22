import React from 'react';

import './index.scss';
import Item from './Item';
import { getGenres } from '../../utilits';

const ItemsCarousel = ({items, category, baseUrl, genres}) => {
    
    return (
        <div className="items-carousel">
            <h2>{ category }</h2>
            <div className="swiper-wrapper">
                {
                    items.map((item, index) => {
                        if(item.backdrop_path) {
                            return <Item
                                key={
                                    index + item.original_title ? 
                                    item.original_title : 
                                    item.original_name
                                }
                                baseUrl={ baseUrl }
                                genres={ getGenres(genres, item.genre_ids).slice(0, 2) }
                                {...item}
                            />
                        }
                    })
                }
            </div>
        </div>
    );
}

export default ItemsCarousel;
