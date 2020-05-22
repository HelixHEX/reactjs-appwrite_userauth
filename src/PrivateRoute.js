import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({appwrite: appwrite, component: Component, auth: auth, ...rest}) => (
  <Route {...rest} render={(props) => {
    return localStorage.getItem('auth_token') ? <Component {...props} auth = {auth} /> : <Redirect to='/signin' />;
  }} />
);

export default PrivateRoute;
