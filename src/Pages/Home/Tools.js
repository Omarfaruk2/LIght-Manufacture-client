import React from 'react'
import useToos from '../Share/useToos'
import SingleTool from './SingleTool'

const Tools = () => {

    const [tools] = useToos()

    // console.log(tools)

    return (
        <div>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 bg-base-300 mx-auto'>

                {
                    tools.map(tool => <SingleTool
                        tool={tool}
                        key={tool._id}
                    ></SingleTool>)
                }

                {/* a relevant name, image, short description, minimum order quantity, available quantity, price (per unit price), a place order/ */}
                {/* <div  className="card w-96 bg-base-100 shadow-xl">
    <figure  className="px-10 pt-10">
        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"  className="rounded-xl" />
    </figure>
    <div  className="card-body items-center text-center">
        <h2  className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div  className="card-actions">
            <button  className="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div> */}
            </div>
        </div>
    )
}

export default Tools