import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const MyProfile = () => {

    const [user] = useAuthState(auth)

    const { photoURL, displayName, email, address } = user
    // console.log(user)


    const handleUpdateProfile = (event) => {

        event.preventDefault()
        const address = event.target.address.value
        const phone = event.target.phone.value


        const data = {
            displayName: displayName,
            photoURL: photoURL,
            address: address,
            phone: phone
        }
        console.log(data)


        fetch(`https://evening-shelf-42427.herokuapp.com/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)


                // if (data.success) {
                //     toast(`Appoinment is set`)

                // }
                // else {
                //     console.log(data)
                //     toast.error(`You already have a Appoinment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
                // }

            })


    }

    return (
        <div className='w-full'>
            <h2>My Profile</h2>
            <div className='w-full'>
                <form onSubmit={handleUpdateProfile}>
                    <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                        <figure>
                            <div className="avatar">
                                <div className="w-24 mask mask-squircle">
                                    {
                                        photoURL && <img src={photoURL} alt='' />
                                    }
                                    {
                                        !user?.photoURL && <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ0AjgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAIBB//EADMQAAIBAgIIAwcEAwAAAAAAAAABAgMEBRESEyExQVFhoSIycRRSYnKBwdEjNEKxkaLw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD9lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4q1YUY6dWSjFcWVlfGlm1b0s/ins7FwWwM/LFrtvZOKXSJ9hi91HzaEujjkMTV+Cut8Xo1MlWWqb470WKaaTWWT5EUAAAAAAAAAAAAACG7uIW1F1J7eCS3tkxncUufaLqWT8EPDH7sQQXNzUuamnVfouEfQiANIAAIHZYX8rWWhLOVF748vQ4wFa2LUoqUWmms01xPpU4HcNqVvJ7vFD7otjKgAAAAAAAAAAjuajpW9Wot8YNoyppsR/Y1/kMyWJQAFQAAAAAdFhU1d5Rl8WT+uw0xlbdZ3FJfGv7NUSrAAEUAAAAAAAB5qQVSnKEt0lkzKSi4TlGSylF5NGtKbGrRxn7TBeGWyfR8ywVQAKgAAgAArrwqlrb2GzZDxM0ZxYVaO2oaVTZUnta5dDtJSAAIoAAAAAAAAJJSi4yScWsmmPXYcNfFbalLRjpVGt7huA4b/C6lFudupTp+7xj+StNVb1oV6UalJ5xfY81rO3rvOpTWl7y2P/JdRlwXssGt35Z1I+jX4PUMItovOTqTXJsumKGMJTkowi5Se5JF1h2GalqrcJOf8Y71Hr6lhRo0qEdGjCMFxyW8hvb2laKOmnKUt0Y7yaOkHNa31C5yUJaM/dlsZ1PeRXwAAAAAAAAjuK9O3pupVllFdxXrQt6UqlXyrhzM5dXM7qpp1N38Y+6gJL2/q3Tyb0aXCC+/M5ADSOvDr2VpU2rSpyfij+DQUa1OtBTpSUovkZQ906lSlLSpzlF808hg1n0Phno4rdxWWnF9XFHmpid3UWWt0fkWRMNXd3eUrWPjac3ugt7M7XrVK9WVSr5nw5Hhtttt5tnwYHoWlhisqeVO5k5w9/ivyVYKNdFqSTi809zXEFBhl+7aSpVX+i/9OvoX6yazTzRFAAQADhxe41Ns4xeU6mxdFxf/AHMCsxS79pruMH+lB+Fc+pxAGsQAAQAAAAAAAAAAAucFu9KPs1R7YrOHpyKY9U5yp1Izg8pReaZKrWA8UKsa9GNWHlksz2RQz2LVnVvJLPZT8K+/cv6k1SpyqPdFNmTbbbcnm3vZYlAAVAAAAAAAAAAAAAAAAFzgVbOFSjL+Pij9y1M5hdTV3tPlLwv6mkJVjkxWThh9ZrfkkvqzN8WaHGf2Evmj/ZQqnmt5YV4BJquvYarr2CIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gPMJOE4yW9NM1r3mSnDKLeZrI+VehKr/9k=" alt='' />

                                    }

                                </div>
                            </div>
                        </figure>
                        <div className="card-body mx-auto">
                            <h2 className="card-title">Name: {displayName}</h2>
                            <h2 className="card-title">Email: {email}</h2>

                            {/* {
                                address && <> <h2 className="card-title">Address:{address} </h2>
                                    <h2 className="card-title">Phone:{} </h2></>
                            } */}

                            {/* Address */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input type="text" name='address' required placeholder="address" className="input input-bordered" />
                            </div>

                            {/* Phone */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="number" name='phone' required placeholder="phone" className="input input-bordered" />
                            </div>
                            {/* End */}
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Update Your Profile</button>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default MyProfile