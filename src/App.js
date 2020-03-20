import './App.css';

import { grey } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: { light: '#000', main: '#000', dark: '#000' },
    primary: { light: grey[50], main: grey[100], dark: grey[20] },
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
