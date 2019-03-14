import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import LoginLayout from "./layouts/LoginLayout";

class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="demo-app/build/">
        <Switch>
            <LoginLayout path="/login" component={LoginLayout} />  
            <BasicLayout path="/" component={BasicLayout} />  
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;