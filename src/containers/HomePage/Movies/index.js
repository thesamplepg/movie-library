import React from 'react';

import { connect } from 'react-redux';
import ItemsCarousel from '../../../components/ItemsCarousel';

const Movies = ({ movies, configuration, genres }) => {
    const categories = ['upcoming', 'popular', 'now playing', 'top rated'];
    const moviesKeys = Object.keys(movies);

    const baseUrl = configuration.images.base_url + configuration.images.poster_sizes[1];
    
    return (
        <React.Fragment>
            
            {
                categories.map((category, index) => {
                    return <ItemsCarousel 
                        genres={ genres }
                        baseUrl={ baseUrl }
                        category={category}
                        key={moviesKeys[index]}
                        items={ movies[moviesKeys[index]] }
                    />
                })
            }

        </React.Fragment>
    );
}

export default connect( state => ({
    movies: state.movies,
    configuration: state.app.configuration
}) )(Movies);
