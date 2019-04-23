import React from 'react';
import Swiper from 'swiper';

import './index.scss';

const Cast = ({cast, configuration}) => {

    React.useEffect(() => {
        new Swiper('.cast-carousel', {
            loop: true,
            slidesPerView: 5,
            breakpoints:{
                620: {
                    slidesPerView: 3
                },
                340: {
                    slidesPerView: 2
                }
            }
        });
    });

    const { base_url, profile_sizes } = configuration.images;

    return (
        <div className="cast-carousel">
            <h2>Cast</h2>
            <div className="swiper-wrapper">
                {
                    cast.map((caster, index) => {
                        if(caster.profile_path) {
                            const url = `${base_url + profile_sizes[1]}/${caster.profile_path}`;

                            return (
                                <div className="swiper-slide" key={index}>
                                    <img src={url} alt="profile" />
                                    <p>{caster.name}</p>
                                </div>
                            )
                        }

                        return null;
                    })
                }
            </div>
        </div>
    );
}

export default Cast;
