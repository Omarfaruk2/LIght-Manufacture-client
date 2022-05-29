import React from 'react'

const SingleReview = ({ review }) => {
    const { name, img, photoURL, description, rating } = review
    if (!img) {
        review.img = photoURL
    }
    console.log(rating)
    return (
        <div>
            <div className="card w-96 h-80 bg-primary text-primary-content mx-auto">
                <div className="avatar p-4">
                    <div className="w-24 rounded-full mx-auto ring ring-primary ring-offset-base-100  ring-offset-2">
                        <img className='' src={review?.img} alt='' />
                    </div>
                    <div>



                        <div class="rating d-flex items-center">
                            <h2 className='text-2xl'>{rating}</h2>  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
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