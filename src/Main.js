import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import LoginLayout from "./layouts/LoginLayout";

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <LoginLayout path="/login" component={LoginLayout} />  
            <BasicLayout path="/" component={BasicLayout} />  
        </Switch>
      </Router>
    );
  }
}

export default Main;