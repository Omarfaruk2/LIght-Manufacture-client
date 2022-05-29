import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const MyOrder = () => {

    const [user] = useAuthState(auth)
    const [orders, setOtders] = useState([])
    useEffect(() => {

        fetch(`http://localhost:5000/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOtders(data))
    }, [user?.email])
    // console.log(orders)


    const handleDeleteditems = (id) => {
        // console.log(email, "id")
        const proceed = window.confirm("Are you sure for delete")
        if (proceed) {
            const url = `http://localhost:5000/order/${user?.email}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(order => order._id !== id)
                    console.log(remaining)
                    setOtders(remaining)

                })
        }
    }


    return (
        <div>
            <h2>My Orders</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Product name</th>
                                <th>Img</th>
                                <th>Quantity</th>
                                <th>Address</th>
                                <th>Payment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order =>
                                    <tr>
                                        <th>{order.displayname}</th>
                                        <td>{order?.pdName}</td>
                                        <td><img width="50px" src={order?.img} alt="" /></td>
                                        <td>{order?.quantity}</td>
                                        <td>{order?.pdName}</td>
                                        <td><button class="btn btn-primary">Pay</button></td>
                                        <td><button onClick={() => handleDeleteditems(order?._id)} class="btn btn-sm">Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyOrder