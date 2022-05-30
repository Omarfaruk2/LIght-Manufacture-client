import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import Spiner from './Spiner'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()

    if (loading) {
        return <Spiner></Spiner>
    }

    const logout = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")

    }
    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>

            {
                user && <li><Link to="/dashboard/myorder">Dashboard</Link></li>
            }

            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/protfolio">Portfolio</Link></li>
            <li>
                {user ?
                    <button onClick={logout}
                        className="btn btn-ghost">Sign Up</button>
                    : <Link to="/login">Login</Link>
                }
            </li>
        </>

    const handleprofile = () => {
        navigate("/dashboard/myProfile")

    }
    const handleCompanyName = () => {
        navigate("/")

    }


    return (
        <div data-aos="fade-down" data-aos-duration="2000" className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-accent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h3 onClick={handleCompanyName} className="btn btn-ghost normal-case text-xl">LED PRODUCTION</h3>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-accent lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user?.photoURL && <img src={user?.photoURL} alt='' />
                        }
                        {
                            !user?.photoURL && <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ0AjgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAIBB//EADMQAAIBAgIIAwcEAwAAAAAAAAABAgMEBRESEyExQVFhoSIycRRSYnKBwdEjNEKxkaLw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD9lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4q1YUY6dWSjFcWVlfGlm1b0s/ins7FwWwM/LFrtvZOKXSJ9hi91HzaEujjkMTV+Cut8Xo1MlWWqb470WKaaTWWT5EUAAAAAAAAAAAAACG7uIW1F1J7eCS3tkxncUufaLqWT8EPDH7sQQXNzUuamnVfouEfQiANIAAIHZYX8rWWhLOVF748vQ4wFa2LUoqUWmms01xPpU4HcNqVvJ7vFD7otjKgAAAAAAAAAAjuajpW9Wot8YNoyppsR/Y1/kMyWJQAFQAAAAAdFhU1d5Rl8WT+uw0xlbdZ3FJfGv7NUSrAAEUAAAAAAAB5qQVSnKEt0lkzKSi4TlGSylF5NGtKbGrRxn7TBeGWyfR8ywVQAKgAAgAArrwqlrb2GzZDxM0ZxYVaO2oaVTZUnta5dDtJSAAIoAAAAAAAAJJSi4yScWsmmPXYcNfFbalLRjpVGt7huA4b/C6lFudupTp+7xj+StNVb1oV6UalJ5xfY81rO3rvOpTWl7y2P/JdRlwXssGt35Z1I+jX4PUMItovOTqTXJsumKGMJTkowi5Se5JF1h2GalqrcJOf8Y71Hr6lhRo0qEdGjCMFxyW8hvb2laKOmnKUt0Y7yaOkHNa31C5yUJaM/dlsZ1PeRXwAAAAAAAAjuK9O3pupVllFdxXrQt6UqlXyrhzM5dXM7qpp1N38Y+6gJL2/q3Tyb0aXCC+/M5ADSOvDr2VpU2rSpyfij+DQUa1OtBTpSUovkZQ906lSlLSpzlF808hg1n0Phno4rdxWWnF9XFHmpid3UWWt0fkWRMNXd3eUrWPjac3ugt7M7XrVK9WVSr5nw5Hhtttt5tnwYHoWlhisqeVO5k5w9/ivyVYKNdFqSTi809zXEFBhl+7aSpVX+i/9OvoX6yazTzRFAAQADhxe41Ns4xeU6mxdFxf/AHMCsxS79pruMH+lB+Fc+pxAGsQAAQAAAAAAAAAAAucFu9KPs1R7YrOHpyKY9U5yp1Izg8pReaZKrWA8UKsa9GNWHlksz2RQz2LVnVvJLPZT8K+/cv6k1SpyqPdFNmTbbbcnm3vZYlAAVAAAAAAAAAAAAAAAAFzgVbOFSjL+Pij9y1M5hdTV3tPlLwv6mkJVjkxWThh9ZrfkkvqzN8WaHGf2Evmj/ZQqnmt5YV4BJquvYarr2CIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gIwSarr2Gq69gPMJOE4yW9NM1r3mSnDKLeZrI+VehKr/9k=" alt='' />

                        }

                    </div>
                </label>
                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li onClick={handleprofile}>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>

                    <li><button onClick={logout} className='btn btn-xs btn-ghost pb-6'>Logout</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar