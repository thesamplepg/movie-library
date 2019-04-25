import React from 'react';

import './index.scss';
import Item from './Item';
import { getGenres } from '../../utilits';

const ItemsCarousel = ({items, category, baseUrl, genres}) => {
    
    return (
        <section className="items-carousel">
            <h2>{ category }</h2>
            <ul className="swiper-wrapper">
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

                        return null;
                    })
                }
            </ul>
        </section>
    );
}

export default ItemsCarousel;
