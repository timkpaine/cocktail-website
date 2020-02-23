import './App.css';

import { brown } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: { light: brown[400], main: brown[600], dark: '#1B0B00' },
    primary: { light: brown[50], main: brown[100], dark: brown[20] },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"montserrat"', '"roboto"', 'sans-serif'].join(','),
  },
}));


const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </div>
);

export default App;
