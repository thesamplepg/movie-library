import React from 'react';

import './index.scss';

const Reviews = ({reviews}) => {
    console.log(reviews);

    return (
        <div className="reviews">
            <h2>Reviews</h2>

            {
                reviews.length === 0 ?
                <div className="reviews_not-found">No reviews found</div> :
                reviews.map((review, index) => {
                    return (
                        <div className="review" key={review.id}>
                            <div className="review_author">
                                {review.author}
                            </div>
                            <div className="review_content">
                                {review.content.slice(0, 300)} {review.content.length > 300 ? '...' : null}
                            </div>
                            <div className="review_full">
                                <a href={review.url} target="_blanck">
                                    View full review &rsaquo;
                                </a>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Reviews;
