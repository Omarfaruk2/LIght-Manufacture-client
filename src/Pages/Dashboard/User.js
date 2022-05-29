import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Spiner from '../Share/Spiner'
import UserRow from './UserRow'


const User = () => {
    const [user, loading] = useAuthState(auth)


    const [users, setUser] = useState([])
    useEffect(() => {
        fetch("https://evening-shelf-42427.herokuapp.com/newusers", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data))
    })

    if (loading) {
        return <Spiner></Spiner>
    }

    return (
        <div>
            <h2>All User : {users?.length}</h2>
            <div className="overflow-x-auto">

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Admin Power</th>
                            <th>Delecte User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow
                                key={user?._id}
                                user={user}
                            >
                            </UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User