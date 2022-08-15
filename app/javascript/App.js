import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import Greeeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Greeeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
