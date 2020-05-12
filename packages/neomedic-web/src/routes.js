import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Dashboard from './views/Dash';

const Navigation = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default Navigation;
