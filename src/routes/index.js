import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from '../contexts/auth/Provider';

import PublicRoute from './PublicRoute';
//import PrivateRoute from './PrivateRoute';

import LoginFuncionario from '../pages/Login/LoginFuncionario';
import LoginVisitante from '../pages/Login/LoginVisitante';
import CadastroFuncionario from '../pages/Cadastro/CadastroFuncionario';
import CadastroVisitante from '../pages/Cadastro/CadastroVisitante';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <PublicRoute path="/" exact component={LoginFuncionario}/>
        <PublicRoute path="/visitante" component={LoginVisitante}/>
        <PublicRoute path="/cadastro/funcionario" component={CadastroFuncionario}/>
        <PublicRoute path="/cadastro/visitante" component={CadastroVisitante}/>
        <Route component={NotFound}/>
      </Switch>
    </AuthProvider>
  </Router>
);

export default Routes;