import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import useToken from "../Hooks/UseToken"
import Spiner from '../Share/Spiner'

const Signin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth)
    // const navigate = useNavigate()
    let SingINerroMessage

    const [token] = useToken(guser || user)




    if (loading || gloading || updating) {
        return <Spiner></Spiner>
    }
    if (error || gerror || updateerror) {
        SingINerroMessage = <p className='text-red-500'>{error?.message || gerror?.message || updateerror?.message}</p>
    }

    if (user) {
        console.log("user ase")
    }


    if (token) {
        navigate('/')
    }



    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })



    }

    return (
        <div className='flex h-screen  justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name input */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: "Your name is required"
                                        },

                                    }
                                )}
                                type="text" placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}                                {/* <span className="label-text-alt"></span> */}


                            </label>
                        </div>
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
                        {SingINerroMessage}

                        <input className='btn text-white w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>

                    <p>Already have a account ? <Link className="text-primary" to="/login">Go to login..</Link></p>
                    <div className="divider">OR</div>

                    {/* Google Login */}
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div >
            </div >
        </div >
    )
}



export default Signin