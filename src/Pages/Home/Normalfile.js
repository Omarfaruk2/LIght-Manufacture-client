
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import auth from '../../firebase.init'
import Spiner from '../Share/Spiner'

const ToolsDetails = () => {
    const [Details, setDetails] = useState({})
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)



    useEffect(() => {

        const url = `https://evening-shelf-42427.herokuapp.com/tool/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])

    const { name, img, availableQuantity, minQuantity, price, description } = Details


    if (loading) {
        return <Spiner></Spiner>
    }

    const handlePurches = (event) => {
        event.preventDefault()
        const displayname = event.target.name.value
        const email = event.target.email.value
        const address = event.target.address.value
        const phone = event.target.phone.value
        const quantity = event.target.quantity.value

        const data = {
            pdName: name,
            displayname: displayname,
            email: email,
            address: address,
            phone: phone,
            quantity: quantity,
            img: img
        }
        console.log(data)

        fetch("https://evening-shelf-42427.herokuapp.com/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })



    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <form onSubmit={handlePurches} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            <div className="card-body">
                                {/* Your name*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user.displayName} readOnly placeholder="name" className="input input-bordered" />
                                </div>

                                {/* Email address */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' value={user.email} readOnly placeholder="email" className="input input-bordered" />
                                </div>

                                {/* Address */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="Your address" required className="input input-bordered" />
                                </div>

                                {/* Phone */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='phone' placeholder="Your Phone" required className="input input-bordered" />
                                </div>

                                {/* Your Quantiry */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantiry</span>
                                    </label>
                                    <input type="number" name='quantity' placeholder="Your Quantity" required className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Purchase Now" />
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* <div  className="text-center lg:text-left">
                        <h1  className="text-5xl font-bold">Login now!</h1>
                        <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div>
                        <div className="card lg:max-width:md bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <h3><b>Available Quantity:{availableQuantity}</b></h3>
                                <h3><b>Miniummn Quantity:{minQuantity}</b></h3>
                                <h3><b>Price Per Qurantity:$ {price}</b></h3>
                                <p>{description}</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ToolsDetails