import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import Spiner from '../Share/Spiner'

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user)

    if (loading) {
        return <Spiner></Spiner>
    }


    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className="text-3xl text-center font-bold text-purple-500 ">Welcome to your Dashboard</h2>
                    <Outlet />

                </div>
                <div className="drawer-side bg-base-100">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-300 text-base-content">


                        {
                            !admin &&

                            <>
                                <li><Link to="/dashboard/myorder">My Order</Link></li>
                                <li><Link to="/dashboard/review">My Reviews</Link></li>
                            </>
                        }

                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>


                        {
                            admin
                            &&
                            <>
                                <li><Link to="/dashboard/manageProdcts">Manage Products</Link></li>
                                <li><Link to="/dashboard/allusers">Make Admin</Link></li>
                                <li><Link to="/dashboard/addProducts">Add a Products</Link></li>
                            </>
                        }



                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Dashboard