import React from 'react';

import { connect } from 'react-redux';
import ItemsCarousel from '../../../components/ItemsCarousel';

const TvShows = ({ tvShows, configuration, genres }) => {
    
    const categories = ['airing today', 'popular', 'on the air', 'top rated'];
    const tvKeys = Object.keys(tvShows);

    const width = window.innerWidth < 725 ? 0 : 1;

    const baseUrl = configuration.images.base_url + configuration.images.poster_sizes[width];

    return (    
        <React.Fragment>
            {
                categories.map((category, index) => {
                    return <ItemsCarousel 
                        genres={ genres }
                        baseUrl={ baseUrl }
                        category={category}
                        key={categories[index]}
                        items={ tvShows[tvKeys[index]] }
                    />
                })
            }

        </React.Fragment>
    );
}

export default connect( state => ({
    configuration: state.app.configuration,
    tvShows: state.tvShows
}) )(TvShows);
