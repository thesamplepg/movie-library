import React from 'react';
import Swiper from 'swiper';

import './index.scss';
import Slide from './Slide';

const Header = (props) => {

    React.useEffect(() => {
        new Swiper('.home-header', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000
            },
            keyboard: true
        });
    });

    const slides = props.content.map((movie, index) => {
        return <Slide 
            key={ index }
            {...movie}
            configuration={props.configuration}
            genres={props.genres}
            type={props.isTypeMovies ? 'movie' : 'tv'}
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
