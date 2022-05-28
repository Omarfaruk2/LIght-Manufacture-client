import React from 'react'

const SingleReview = ({ review }) => {
    const { name, img, photoURL } = review
    if (!img) {
        review.img = photoURL
    }

    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content mx-auto">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review?.img} alt='' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    )
}

export default SingleReview