import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Sidebar from './layout/Sidebar';

import Dashboard from './views/Dash';

const Navigation = () => (
  <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default Navigation;
