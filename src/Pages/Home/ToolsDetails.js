

import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
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

        console.log(quantity - minQuantity, availableQuantity)

        const NewavailableQuantity = availableQuantity - quantity
        console.log(NewavailableQuantity)



        // if (quantity > minQuantity || availableQuantity < quantity) {
        //     return toast.error("Your Quantity is less or higher then avilable")
        // }


        const data = {
            pdName: name,
            displayname: displayname,
            email: email,
            address: address,
            phone: phone,
            quantity: quantity,
            img: img
        }



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

        event.target.address.value = ""
        event.target.phone.value = ""
        event.target.quantity.value = ""

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







// import React, { useEffect, useState } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useForm } from 'react-hook-form'
// import { useParams } from 'react-router-dom'
// import auth from '../../firebase.init'
// import Orderfrom from '../Dashboard/Orderform'
// import Spiner from '../Share/Spiner'

// const ToolsDetails = () => {
//     const { register, formState: { errors }, reset, handleSubmit } = useForm()
//     const [Details, setDetails] = useState({})
//     const { id } = useParams()
//     const [user, loading] = useAuthState(auth)



//     useEffect(() => {

//         const url = `https://evening-shelf-42427.herokuapp.com/tool/${id}`

//         fetch(url)
//             .then(res => res.json())
//             .then(data => setDetails(data))
//     }, [id])

//     const { name, img, availableQuantity, minQuantity, price, description } = Details


//     if (loading) {
//         return <Spiner></Spiner>
//     }



//     const handlePurches = (event) => {
//         event.preventDefault()
//         const displayname = event.target.name.value
//         const email = event.target.email.value
//         const address = event.target.address.value
//         const phone = event.target.phone.value
//         const quantity = event.target.quantity.value

//         const data = {
//             pdName: name,
//             displayname: displayname,
//             email: email,
//             address: address,
//             phone: phone,
//             quantity: quantity,
//             img: img
//         }
//         console.log(data)

//         fetch("https://evening-shelf-42427.herokuapp.com/order", {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)

//             })



//     }

//     const onSubmit = data => {
//         console.log(data)
//     }

//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">

//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         {/* Name input */}
//                         <div className="form-control w-full max-w-xs">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input
//                                 {...register("name",
//                                     {
//                                         required: {
//                                             value: true,
//                                             message: "Name is required"
//                                         },

//                                     }
//                                 )}
//                                 type="text" placeholder="Your Name" value={user?.displayName} readOnly
//                                 className="input input-bordered w-full max-w-xs"
//                             />
//                             <label className="label">
//                                 {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}                                {/* <span className="label-text-alt"></span> */}
//                                 {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}                                {/* <span className="label-text-alt"></span> */}

//                             </label>
//                         </div>
//                         {/* Email input */}
//                         <div className="form-control w-full max-w-xs">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 {...register("email",
//                                     {
//                                         required: {
//                                             value: true,
//                                             message: "Email is required"
//                                         },
//                                         pattern: {
//                                             value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                                             message: 'Probide a valid Email'
//                                         }
//                                     }
//                                 )}
//                                 type="email" placeholder="Your Email" value={user?.email} readOnly
//                                 className="input input-bordered w-full max-w-xs"
//                             />
//                             <label className="label">
//                                 {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}                                {/* <span className="label-text-alt"></span> */}
//                                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}                                {/* <span className="label-text-alt"></span> */}

//                             </label>
//                         </div>
//                         {/* Addtess */}
//                         <div className="form-control w-full max-w-xs">
//                             <label className="label">
//                                 <span className="label-text">Address</span>
//                             </label>
//                             <input
//                                 {...register("address",
//                                     {
//                                         required: {
//                                             value: true,
//                                             message: "Address is required"
//                                         },
//                                         pattern: {

//                                             message: 'Probide a valid Email'
//                                         }
//                                     }
//                                 )}
//                                 type="text" placeholder="Your address"
//                                 className="input input-bordered w-full max-w-xs"
//                             />
//                             <label className="label">
//                                 {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}                                {/* <span className="label-text-alt"></span> */}
//                                 {errors.address?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}                                {/* <span className="label-text-alt"></span> */}

//                             </label>
//                         </div>
//                         {/* Phone */}
//                         <div className="form-control w-full max-w-xs">
//                             <label className="label">
//                                 <span className="label-text">Phone</span>
//                             </label>
//                             <input
//                                 {...register("phone",
//                                     {
//                                         required: {
//                                             value: true,
//                                             message: "Phone is required"
//                                         },
//                                         pattern: {

//                                             message: 'Probide a valid Phone'
//                                         }
//                                     }
//                                 )}
//                                 type="number" placeholder="Your Phone"
//                                 className="input input-bordered w-full max-w-xs"
//                             />
//                             <label className="label">
//                                 {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}                                {/* <span className="label-text-alt"></span> */}
//                                 {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}                                {/* <span className="label-text-alt"></span> */}

//                             </label>
//                         </div>

//                         {/* Quantiry */}
//                         <div className="form-control w-full max-w-xs">
//                             <label className="label">
//                                 <span className="label-text">Quantity</span>

//                             </label>
//                             <input
//                                 {...register("quantiry",
//                                     {
//                                         required: {
//                                             value: true,
//                                             message: "Quantiry is required"
//                                         },
//                                         minLength: {

//                                             message: 'Quantiry shold have more then 6 numbers'
//                                         }
//                                     }
//                                 )}
//                                 type="number" placeholder="Your quantiry"
//                                 className="input input-bordered w-full max-w-xs"
//                             />
//                             <label className="label">
//                                 {errors.quantiry?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantiry.message}</span>}                                {/* <span className="label-text-alt"></span> */}
//                                 {errors.quantiry?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.quantiry.message}</span>}                                {/* <span className="label-text-alt"></span> */}

//                             </label>
//                         </div>
//                         {/* {SingINerroMessage} */}

//                         <input className='btn text-white w-full max-w-xs' type="submit" value="Order now" />
//                     </form>
//                     {/* <div  className="text-center lg:text-left">
//                         <h1  className="text-5xl font-bold">Login now!</h1>
//                         <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div> */}
//                     <div>
//                         <div className="card w-72 bg-base-100 shadow-xl">
//                             <figure className="px-10 pt-10">
//                                 <img src={img} alt="Shoes" className="rounded-xl" />
//                             </figure>
//                             <div className="card-body items-center text-center">
//                                 <h2 className="card-title">{name}</h2>
//                                 <h3><b>Available Quantity:{availableQuantity}</b></h3>
//                                 <h3><b>Miniummn Quantity:{minQuantity}</b></h3>
//                                 <h3><b>Price Per Qurantity:$ {price}</b></h3>
//                                 <p>{description}</p>

//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ToolsDetails