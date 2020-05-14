import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from '../views/Auth/SignIn';

const AuthNavigation = () => (
  <Routes>
    <Route from="/" to="/signin" element={<SignIn />} />
  </Routes>
);

export default AuthNavigation;
