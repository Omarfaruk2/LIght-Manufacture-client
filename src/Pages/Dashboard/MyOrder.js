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
    console.log(orders)

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