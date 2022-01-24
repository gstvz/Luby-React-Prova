import React from 'react';
import { GlobalStyle } from './shared/styles/GlobalStyle';
import { Auth } from './pages/Auth';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Auth />
    </BrowserRouter>
  );
}

export default App;
