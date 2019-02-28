import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx"; 
import LandingPage from "layouts/LandingPage.jsx"
import RTL from "layouts/RTL.jsx"; 
import './index.css';

import "assets/css/material-dashboard-react.css?v=1.6.0";
import Signin from "./components/LoginModule/Signin.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch> 
      <Route path="/" exact component={LandingPage}/>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} /> 
      <Route path="/signin" component={Signin}/>
      <Redirect from="/dashboard" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
