import React from 'react';
import Swiper from 'swiper';

import './index.scss';
import Slide from './Slide';

const HomeHeader = (props) => {

    new Swiper('.home-header-container', {
        slidesPerView: 1,
        autoplay: {
            delay: 3000
        }
    }); 

    return (
        <div className="home-header-container">
            <div className="swiper-wrapper">
                {
                    props.movies.map((movie, index) => {
                        return (
                            <Slide 
                                configuration={props.configuration}
                                genres={props.genres}
                                key={index}
                                {...movie}
                            />
                        )
                    })
                }
            </div>     
        </div>
    );
}

export default HomeHeader;
