import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Spiner from '../Share/Spiner'

const AddProducts = () => {


    const [user, loading] = useAuthState(auth)

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()


    if (loading) {
        <Spiner></Spiner>
    }

    const onSubmit = (data) => {

        console.log(data)
        const url = "https://evening-shelf-42427.herokuapp.com/tool"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId);
                navigate('/')
            })

    }

    return (
        <div>
            <form className='w-2/3  d-flex flex-column w-50 mx-auto mt-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 bg-primary rounded-xl w-full p-3' placeholder='Product Name' {...register("name")} />
                <input className='mb-2 bg-primary rounded-xl w-full p-3' placeholder='Product minQuantity' {...register("minQuantity")} />

                <input className='mb-2 bg-primary rounded-xl w-full p-3' placeholder='Product availableQuantity' {...register("availableQuantity")} />

                <input className='mb-2 bg-primary rounded-xl w-full p-3' placeholder='Product price' {...register("price")} />
                <input className='mb-2 bg-primary rounded-xl w-full p-3' placeholder='Product description' {...register("description")} />

                <input className='mb-2 bg-primary rounded-xl w-full p-3' placeholder='Product img' {...register("img")} />


                <input className='mb-2 bg-primary rounded-xl w-full p-3 text-white font-bold' type="submit" value="Add Light" />
            </form>
        </div>

    )
}

export default AddProducts