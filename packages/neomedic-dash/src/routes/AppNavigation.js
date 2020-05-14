import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../views/Dash';

const AppNavigation = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default AppNavigation;
