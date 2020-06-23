import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import App from './App';
import { red } from '@material-ui/core/colors';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


