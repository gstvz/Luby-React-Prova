import React from 'react';
import { GlobalStyle } from './shared/styles/GlobalStyle';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthPage />
    </BrowserRouter>
  );
}

export default App;