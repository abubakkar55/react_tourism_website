import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
const PrivateRoute = ({ children }) => {
    const { firebase: { firebaseData, loading } } = useFirebaseMongo();
    const location = useLocation();
    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <img className="w-96" src="https://cdn.dribbble.com/users/68238/screenshots/5503763/slack.gif" alt="loading-gif" />
            </div>
        )
    }
    if (!firebaseData?.email) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }
    return children
}

export default PrivateRoute;