import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>

            {/* <li><Link to="/about">About</Link></li>
            <li><Link to="/appoinment">Appoinment</Link></li>
            <li><Link to="/review">Reviews</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> */}

            {/* {
                user && <li><Link to="/dashboard">Dashboard</Link></li>

            } */}

            {/* <li>
                {user ?
                    <button onClick={logout}
                        className="btn btn-ghost">Sign Up</button>
                    : <Link to="/login">Login</Link>
                }
            </li> */}
        </>




    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-accent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h3 className="btn btn-ghost normal-case text-xl">LED PRODUCTION</h3>
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
            <div class="dropdown dropdown-end">
                <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
                <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar