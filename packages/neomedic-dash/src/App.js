import 'normalize.css';
import React, { useEffect } from 'react';

import { useAuth, AuthProvider } from 'neomedic-authorization';
import { GlobalStyles } from 'neomedic-styles';

import RootNavigator from './routes';

const App = () => {
  /**
   * Router.
   */
  const Router = () => {
    const {
      run,
      checked,
      isLoggedIn,
    } = useAuth();

    useEffect(() => {
      const fetchInitial = async () => {
        await Promise.all([
          /**
           * Check auth.
           */
          run('check'),
        ]);
      };

      fetchInitial();
    }, [run]);

    return (
      <RootNavigator signedIn={isLoggedIn} />
    );
  };

  return (
    <AuthProvider>
      <GlobalStyles />
      <Router />
    </AuthProvider>
  );
};

export default App;
