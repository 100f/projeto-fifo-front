import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthProvider from '../contexts/auth/Provider';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import LoginFuncionario from '../pages/Login/LoginFuncionario';
import LoginVisitante from '../pages/Login/LoginVisitante';

const Routes = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <PublicRoute path="/" exact component={LoginFuncionario}/>
        <PrivateRoute path="/visitante" component={LoginVisitante}/>
      </Switch>
    </AuthProvider>
  </Router>
);

export default Routes;