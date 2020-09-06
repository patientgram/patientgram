import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import homepagePicture from "./images/homepage-picture.jpg";

import Placeholder from "./pages/placeholder/placeholder";
import ProviderDashboard from "./pages/provider-dashboard/provider-dashboard";
import ContactDashboard from "./pages/contact-dashboard/contact-dashboard";
import SignUp from "./pages/sign-up/sign-up";
import SignIn from "./pages/sign-in/sign-in";
import Page404 from "./pages/page-404/page-404";
import Header from "./header";

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
        <div>
          <Header
            title="PatientGram"
            sections={[{ title: "Technology", url: "#" }]}
          />
          <div>
            <img className="image" src={homepagePicture}></img>
          </div>
          <div className="description">
            <p>
              At PatientGram, we believe that keeping your loved one's updated
              is an essential part of patient care. This platform allows you to
              receive direct updates from doctors when there are changes to
              their care plan. Simply create an account and get updates about
              your loved one's care progress
            </p>
            <h3>How it works</h3>
            <p>
              A medical provider working with the patient will provide frequent
              updates. As the contact person for the patient, you will get a
              notification when there is a new update.
            </p>
          </div>
        </div>
      );
    }
  }
}

export default App;
