import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { token, user } = useAuth();

  return (
    user && token
    ? <Redirect to='/home'/>
    : <Route {...rest} component={props => <Component {...props}/>} />
  )
};

export default PublicRoute;