import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Placeholder from "./pages/placeholder/placeholder";
import ProviderDashboard from "./pages/provider-dashboard/provider-dashboard";
import ContactDashboard from "./pages/contact-dashboard/contact-dashboard";
import SignUp from "./pages/sign-up/sign-up";
import SignIn from "./pages/sign-in/sign-in";
import SignInMethod from "./pages/sign-in/sign-in-method";
import Page404 from "./pages/page-404/page-404";
import Header from "./pages/home/header";
import Home from "./pages/home/home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  render() {
    if (this.state.currentUser) {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Placeholder} />
            <Route
              exact
              path="/providerdashboard"
              component={ProviderDashboard}
            />
            <Route
              exact
              path="/providerdashboard/:patientId"
              component={ProviderDashboard}
            />
            <Route
              exact
              path="/contactdashboard"
              component={ContactDashboard}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={Page404} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={SignInMethod} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={Page404} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
