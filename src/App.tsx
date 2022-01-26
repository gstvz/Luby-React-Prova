import React from 'react';
import { GlobalStyle } from './shared/styles/GlobalStyle';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <AuthPage />
    </BrowserRouter>
  );
}

export default App;