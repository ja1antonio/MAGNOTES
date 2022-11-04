import React from 'react';
import ReactDOM from 'react-dom/client';
import { Details } from './pages/Details';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';

import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
