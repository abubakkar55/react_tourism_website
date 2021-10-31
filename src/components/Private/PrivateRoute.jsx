import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
const PrivateRoute = ({ children, ...rest }) => {
    const { firebase: { firebaseData, loading } } = useFirebaseMongo();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <img className="w-96" src="https://cdn.dribbble.com/users/68238/screenshots/5503763/slack.gif" alt="loading-gif" />
            </div>
        )
    }
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                firebaseData.email ? children :
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: location }
                    }} />
            }
        />
    )
}

export default PrivateRoute;