import React from 'react';
import AuthContext from './index';

import useStorage from '../../hooks/useStorage';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [loggedUser, setLoggedUser] = useStorage('loggedUser');

  return (
    <AuthContext.Provider value={{token, setToken, loggedUser, setLoggedUser}}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;