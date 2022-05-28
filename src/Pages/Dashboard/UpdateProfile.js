import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateProfile = () => {
    const patam = useParams()
    return (
        <div>
            <h2>Hello {patam}</h2>
        </div>
    )
}

export default UpdateProfile