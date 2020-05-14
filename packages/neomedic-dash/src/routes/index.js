import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { bool } from 'prop-types';

import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const RootNavigator = ({ signedIn }) => (
  <BrowserRouter>
    {signedIn
      ? <AppNavigation />
      : <AuthNavigation />}
  </BrowserRouter>
);

RootNavigator.propTypes = {
  signedIn: bool.isRequired,
};

export default RootNavigator;
