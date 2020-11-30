import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  loggedUser: {},
  setLoggedUser: () => {}
});

export default AuthContext;

