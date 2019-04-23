import React from 'react';
import Swiper from 'swiper';

import './index.scss';

const Vidoes = ({ videos, configuration }) => {

    React.useEffect(() => {
        new Swiper('.videos-carousel', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            breakpoints: {
                975: {
                    slidesPerView: 2
                },
                665: {
                    slidesPerView: 1
                }
            }
        })
    });
    
    return (
        <div className="videos-carousel">
            <h2>Videos</h2>
            <div className="swiper-wrapper">
                {
                    videos.length === 0 ?
                    <div className="no-videos">No videos found</div> :
                    videos.map((video, index) => {
                        return (
                            <div className="swiper-slide" key={video.key}>
                                <iframe 
                                    title={index}
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                >
                                </iframe>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Vidoes;
