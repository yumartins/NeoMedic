import 'normalize.css';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import { useAuth, AuthProvider } from 'neomedic-authorization';
import i18n from 'neomedic-i18n';
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
    }, []);

    return (
      <RootNavigator signedIn={isLoggedIn} />
    );
  };

  return (
    <AuthProvider>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </AuthProvider>
  );
};

export default App;
