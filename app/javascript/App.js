import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeeting from './Greeting';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
