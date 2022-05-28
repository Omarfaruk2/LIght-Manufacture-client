import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Spiner from '../Share/Spiner'

const DashboardReview = () => {

    const [user, loading] = useAuthState(auth)

    if (loading) {
        return <Spiner></Spiner>
    }

    if (!user?.photoURL) {
        user.photoURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ0AjgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAIBB//EADMQAAIBAgIIAwcEAwAAAAAAAAABAgMEBRESEyExQVFhoSIycRRSYnKBwdEjNEKxkaLw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD9lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4q1YUY6dWSjFcWVlfGlm1b0s/ins7FwWwM/LFrtvZOKXSJ9hi91HzaEujjkMTV+Cut8Xo1MlWWqb470WKaaTWWT5EUAAAAAAAAAAAAACG7uIW1F1J7eCS3tkxncUufaLqWT8EPDH7sQQXNzUuamnVfouEfQiANIAAIHZYX8rWWhLOVF748vQ4wFa2LUoqUWmms01xPpU4HcNqVvJ7vFD7otjKgAAAAAAAAAAjuajpW9Wot8YNoyppsR/Y1/kMyWJQAFQAAAAAdFhU1d5Rl8WT+uw0xlbdZ3FJfGv7NUSrAAEUAAAAAAAB5qQVSnKEt0lkzKSi4TlGSylF5NGtKbGrRxn7TBeGWyfR8ywVQAKgAAgAArrwqlrb2GzZDxM0ZxYVaO2oaVTZUnta5dDtJSAAIoAAAAAAAAJJSi4yScWsmmPXYcNfFbalLRjpVGt7huA4b/C6lFudupTp+7xj+StNVb1oV6UalJ5xfY81rO3rvOpTWl7y2P/JdRlwXssGt35Z1I+jX4PUMItovOTqTXJsumKGMJTkowi5Se5JF1h2GalqrcJOf8Y71Hr6lhRo0qEdGjCMFxyW8hvb2laKOmnKUt0Y7yaOkHNa31C5yUJaM/dlsZ1PeRXwAAAAAAAAjuK9O3pupVllFdxXrQt6UqlXyrhzM5dXM7qpp1N38Y+6gJL2/q3Tyb0aXCC+/M5ADSOvDr2VpU2rSpyfij+DQUa1OtBTpSUovkZQ906lSlLSpzlF808hg1n0Phno4rdxWWnF9XFHmpid3UWWt0fkWRMNXd3eUrWPjac3ugt7M7XrVK9WVSr5nw5Hhtttt5tnwYHoWlhisqeVO5k5w9/ivyVYKNdFqSTi809zXEFBhl+7aSpVX+i/9OvoX6yazTzRFAAQADhxe41Ns4xeU6mxdFxf/AHMCsxS79pruMH+lB+Fc+pxAGsQAAQAAAAAAAAAAAucFu9KPs1R7YrOHpyKY9U5yp1Izg8pReaZKrWA8UKsa9GNWHlksz2RQz2LVnVvJLPZT8K+/cv6k1SpyqPdFNmTbbbcnm3vZYlAAVAAAAAAAAAAAAAAAAFzgVbOFSjL+Pij9y1M5hdTV3tPlLwv6mkJVjkxWThh9ZrfkkvqzN8WaHGf2Evmj/ZQqnmt5YV4BJquvYarr2CIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gPMJOE4yW9NM1r3mSnDKLeZrI+VehKr/9k="

    }
    // else if (user?.photoURL) {
    //     console.log("ase")
    // }
    const { photoURL, email, displayName } = user

    const handlePurches = (event) => {
        event.preventDefault()
        const review = event.target.review.value

        const data = {
            review: review,
            photoURL: photoURL,
            email: email,
            name: displayName
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appoinment is set`)

                }
                else {
                    console.log(data)
                    toast.error(`You already have a Appoinment on, ${data?.booking?.date} at ${data?.booking?.slot}`)
                }

            })
        console.log(data)
        console.log(user)




        event.target.review.value = ""
    }


    return (
        <div className='w-full'>
            <h2>MY reviews</h2>
            <form onSubmit={handlePurches} className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <div>
                    <div className="card-body ">
                        {/* Your name*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <input type="text" name='review' placeholder="Review" className="input input-bordered" />
                        </div>
                        {/*  */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit Review" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashboardReview