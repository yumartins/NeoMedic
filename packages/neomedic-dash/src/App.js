import 'normalize.css';
import React, { useState, useEffect } from 'react';

import { useAuth, AuthProvider } from 'neomedic-authorization';
import { GlobalStyles } from 'neomedic-styles';

import RootNavigator from './routes';

const App = () => {
  /**
   * Router.
   */
  const Router = () => {
    const [loading, onLoading] = useState(true);

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

          onLoading(false),
        ]);
      };

      fetchInitial();
    }, []);

    if (loading) {
      return (
        <h1>Loading...</h1>
      );
    }

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
