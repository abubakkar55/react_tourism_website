import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
const PrivateRoute = ({ children, ...rest }) => {
    const { firebase: { firebaseData } } = useFirebaseMongo();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                firebaseData?.email ? (children) : (
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

export default PrivateRoute;