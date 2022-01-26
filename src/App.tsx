import React from 'react';
import { GlobalStyle } from './shared/styles/GlobalStyle';
import { HomePage } from './pages/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;