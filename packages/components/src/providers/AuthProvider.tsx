import * as React from 'react';
import { createContext, useState, FunctionComponent } from 'react';

interface User {
  user: object;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [user, setUser] = useState({ name: 'Anonymous' });

  const value: User = {
    user,
    login(name: string) {
      setUser({ name });
    },
    logout() {
      setUser({ name: 'Anonymous' });
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
