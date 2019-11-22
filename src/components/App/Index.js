import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation/Index";

import LandingPage from "../Navigation/Index";
import SignUpPage from "../SignUp/Index";
import SignInPage from "../SignIn/Index";
import PasswordForgetPage from "../PasswordForget/Index";
import HomePage from "../Home/Index";
import AccountPage from "../Account/Index";
import AdminPage from "../Admin/Index";

import * as ROUTES from "../../constants/routes";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
};

export default App;
