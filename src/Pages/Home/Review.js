import React, { useEffect, useState } from 'react'
import SingleReview from './SingleReview'

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews)

    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                {
                    reviews?.slice(0, 3).map(review =>
                        <SingleReview
                            key={review._id}
                            review={review}
                        >
                        </SingleReview>)
                }
            </div>
        </div>
    )
}

export default Review