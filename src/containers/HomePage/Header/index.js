import React from 'react';
import Swiper from 'swiper';

import './index.scss';
import Slide from './Slide';

const Header = (props) => {

    new Swiper('.home-header', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000
        },
        keyboard: true
    });

    const slides = props.movies.map((movie, index) => {
        return <Slide 
            key={ index }
            {...movie}
            configuration={props.configuration}
            genres={props.genres}
        />
    });

    return (
        <div className="home-header">
            <div className="swiper-wrapper">
                { slides }
            </div>    
        </div>
    );
}

export default Header;
