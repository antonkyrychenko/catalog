import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { AuthProvider } from '../components/Auth/AuthProvider';
import PrivateRoute from '../components/Routes/PrivateRoute';

// Material Ui
import { ThemeProvider, createMuiTheme, ThemeOptions, CssBaseline } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

// Pages
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import AnonymousRoute from '../components/Routes/AnonymousRoute';

const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: green
  }
};

const theme = createMuiTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path={["/", "/add-product", "/products/:productId/edit"]} component={CatalogPage} />
          <AnonymousRoute exact path="/sign-in" component={SignInPage} />
          <AnonymousRoute exact path="/sign-up" component={SignUpPage} />
        </Switch>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
