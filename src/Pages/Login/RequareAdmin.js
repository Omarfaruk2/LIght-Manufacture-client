import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import Spiner from '../Share/Spiner'

const RequareAdmin = ({ children }) => {

    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()

    if (loading || adminLoading) {
        return <Spiner></Spiner>
    }

    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
}

export default RequareAdmin