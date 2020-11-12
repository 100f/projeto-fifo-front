import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token, user } = useAuth();

  return (
    <Route {...rest} render={props => (
      token && user
      ? <Component {...props}/>
      : <Redirect to="/"/>
    )}/>
  )
};

export default PrivateRoute;