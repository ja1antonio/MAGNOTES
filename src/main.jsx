import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';

import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
