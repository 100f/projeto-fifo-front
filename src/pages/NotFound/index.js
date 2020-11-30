import React from 'react';
import { Link } from 'react-router-dom'

import useAuth from '../../hooks/useAuth';

import './styles.css';

const NotFound = () => {
  const { user, token } = useAuth();

  return (
    <div id="page-not-found">

      <h1>:-(</h1>
      <p>Aparentemente esta página não está <span>indexada</span>...</p>

      <Link 
        to={user && token ? '/' : '/'}
        className="link-home" //temp
      >
        {'<'} &nbsp; Voltar para Home {/*temp*/}
      </Link>
    </div>
  )
};

export default NotFound;