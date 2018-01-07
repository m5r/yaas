/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { blueGrey } from 'material-ui/colors';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from 'containers/HomePage/Loadable';
import Header from 'components/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blueGrey,
      500: blueGrey[900],
    },
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Redirect from='*' to='/' />
      </Switch>
    </MuiThemeProvider>
  );
}
