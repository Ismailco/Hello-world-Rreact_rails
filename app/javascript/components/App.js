import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeeting from './Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Greeeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;