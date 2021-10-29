import React from 'react';
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
    const email = "abu";
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (children) : (
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: location }
                    }} />)

            }
        >
            {children}
        </Route>
    )
}

export default PrivateRoute
