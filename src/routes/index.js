import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthProvider from '../contexts/auth/Provider';
import MatchStateProvider from '../contexts/matchState/Provider';

import PublicRoute from './PublicRoute';
//import PrivateRoute from './PrivateRoute';

import LoginFuncionario from '../pages/Login/LoginFuncionario';
import LoginVisitante from '../pages/Login/LoginVisitante';
import CadastroFuncionario from '../pages/Cadastro/CadastroFuncionario';
import CadastroVisitante from '../pages/Cadastro/CadastroVisitante';
import Home from '../pages/Home';
import Queue from '../pages/Queue';
import NotFound from '../pages/NotFound';
import Match from '../pages/Match'; 
import Landing from '../pages/Landing'; 

const Routes = () => (
  <Router>
    <AuthProvider>
      <MatchStateProvider>
        <Switch>
          <PublicRoute path="/" exact component={Landing}/>
          <PublicRoute path="/login/visitante" component={LoginVisitante}/>
          <PublicRoute path="/login/funcionario" component={LoginFuncionario}/>
          <PublicRoute path="/cadastro/funcionario" component={CadastroFuncionario}/>
          <PublicRoute path="/cadastro/visitante" component={CadastroVisitante}/>
          <PublicRoute path="/home" component={Home}/>
          <PublicRoute path="/queue/:id" component={Queue}/>
          <PublicRoute path="/match/:id" component={Match}/>
          <Route component={NotFound}/>
        </Switch>
      </MatchStateProvider>
    </AuthProvider>
  </Router>
);

export default Routes;