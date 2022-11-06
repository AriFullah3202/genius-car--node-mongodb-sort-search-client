import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // 
    if (loading) {
        return <h1 className='text-5xl'> Loading</h1>
    }
    if (user) {
        return children;
    }

    return (

        <Navigate to='/login' state={{ from: location }} replace></Navigate>

    )
}

export default PrivateRoute
