import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading, setloading} = useContext(AuthContext)

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <span className="loading loading-bars loading-lg mx-auto"></span>
            </div>
        )
    }

    if (user) {
        setloading(false)
        return children
    }

    
    return  <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;