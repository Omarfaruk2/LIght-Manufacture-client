import React from 'react'
import { toast } from 'react-toastify'

const UserRow = ({ user }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/newusers/admin/${email}`, {
            method: 'PUT',
            headers: {
                authrization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(`SuccessFully Made an Admin`)
                }
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>
                {role !== "admin" && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
            </td>
            <td><button className="btn btn-outline btn-error">Remove User</button></td>

        </tr>
    )
}

export default UserRow