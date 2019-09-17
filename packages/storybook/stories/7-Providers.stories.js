import React from 'react';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from '@advanced-react/components';
export default {
  title: '7-Providers',
};

const MyComponent = () => {
  const { login, logout, user } = useContext(AuthContext);

  return (
    <>
      <h1>{user.name}</h1>
      <button onClick={() => login('FooBar')}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export const authProvider = () => {
  return (
    <AuthProvider>
      <MyComponent />
    </AuthProvider>
  );
};
