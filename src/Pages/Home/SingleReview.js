import React from 'react'

const SingleReview = ({ review }) => {
    const { name, img } = review
    return (
        <div>
            <div class="card w-96 bg-primary text-primary-content mx-auto">
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    )
}

export default SingleReview