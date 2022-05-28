import React from 'react'

const SingleReview = ({ review }) => {
    const { name, img, photoURL, description } = review
    if (!img) {
        review.img = photoURL
    }

    return (
        <div>
            <div className="card w-96 h-72 bg-primary text-primary-content mx-auto">
                <div className="avatar p-6">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100  ring-offset-2">
                        <img className='' src={review?.img} alt='' />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleReview