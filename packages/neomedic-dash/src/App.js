import 'normalize.css';
import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import { useAuth, AuthProvider } from 'neomedic-authorization';
import i18n from 'neomedic-i18n';
import { GlobalStyles } from 'neomedic-styles';

import SplashScreen from './layout/Splash';
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
        /**
         * Check auth.
         */
        await run('check');
        onLoading(false);
      };

      fetchInitial();
    }, []);

    if (loading) {
      return <SplashScreen />;
    }

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
