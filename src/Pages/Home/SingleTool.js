import React from 'react'

const SingleTool = ({ tool }) => {
    // console.log(tool)
    const { name, description, price, img, availableQuantity, minQuantity } = tool

    return (
        <div >
            <div class="card lg:max-width:md bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <h3><b>Available Quantity:{availableQuantity}</b></h3>
                    <h3><b>Miniummn Quantity:{minQuantity}</b></h3>
                    <h3><b>Price Per Qurantity:$ {price}</b></h3>
                    <p>{description}</p>

                    <div class="card-actions">
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTool