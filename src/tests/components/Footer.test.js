/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from '../../components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
