import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import Navigation from "../Navigation/Index";
import LandingPage from "../Landing/Index";
import SignUpPage from "../SignUp/Index";
import SignInPage from "../SignIn/Index";
import PasswordForgetPage from "../PasswordForget/Index";
import HomePage from "../Home/Index";
import AccountPage from "../Account/Index";
import AdminPage from "../Admin/Index";

import withAuthentication from "../Session/withAuthenticated";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
