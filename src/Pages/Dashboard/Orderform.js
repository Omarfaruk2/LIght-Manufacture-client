import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
// import Loading from '../../Shared/Loading'
import Spiner from '../Share/Spiner'

const Orderfrom = ({ Details }) => {
    const [user] = useAuthState(auth)
    const { email } = user
    const [quantity, setQuantity] = useState(0)
    const { register, formState: { errors }, reset, handleSubmit } = useForm()

    const updatePrice = Details.price * parseInt(quantity)

    const { data: person, isLoading } = useQuery(['person', email],

        () => fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json()))

    if (isLoading) {
        return <Spiner />
    }
    const onSubmit = data => {
        console.log(data)

    }


    return (

        <div className="card w-full sm:w-96 bg-gradient-to-r from-sky-600 to-indigo-500 text-gray-200  shadow-xl shadow-secondary">
            <div className="card-body">
                <h2 className="card-title justify-center">Delivery address</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email input */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Probide a valid Email'
                                    }
                                }
                            )}
                            type="email" placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}                                {/* <span className="label-text-alt"></span> */}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}                                {/* <span className="label-text-alt"></span> */}

                        </label>
                    </div>

                    {/* password */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Passward</span>

                        </label>
                        <input
                            {...register("password",
                                {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password shold have more then 6 numbers'
                                    }
                                }
                            )}
                            type="password" placeholder="Your password"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}                                {/* <span className="label-text-alt"></span> */}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}                                {/* <span className="label-text-alt"></span> */}

                        </label>
                    </div>
                    {/* {SingINerroMessage} */}

                    <input className='btn text-white w-full max-w-xs' type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Orderfrom