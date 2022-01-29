import React, { Component , useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import ContextToken from './ContextToken';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [token] = useContext(ContextToken)
    return (
        <Route
            {...rest}
            render={() => token() ? <Component {...rest} /> : <Redirect to="/sign-in" />}
        ></Route>
    )
}

export default PrivateRoute;