import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Spiner from '../Share/Spiner'
import auth from "../../firebase.init"
import { useForm } from "react-hook-form"
// import useToken from '../Hooks/usetoken'
import useToken from "../Hooks/UseToken"




const Login = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, euser, eloading, eerror] = useSignInWithEmailAndPassword(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [token] = useToken(guser || euser)

    let SingINerroMessage

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"



    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }

    }, [from, navigate, token])


    if (eloading || gloading) {
        return <Spiner></Spiner>
    }

    if (eerror || gerror) {
        SingINerroMessage = <p className='text-red-500'>{eerror?.message || gerror?.message}</p>
    }



    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen  justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>

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
                        {SingINerroMessage}

                        <input className='btn text-white w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <p>New to Doctors Protal? <Link className="text-primary" to="/singup">Creat new account</Link></p>
                    <div className="divider">OR</div>

                    {/* Google Login */}
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary">Continue With Google</button>
                </div >
            </div >
        </div >
    )
}

export default Login