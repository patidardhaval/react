import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import LoginLayout from "./layouts/LoginLayout";
import NetworkDetector from "./Helper/NetworkDetector";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <LoginLayout path='/login' component={LoginLayout} />
            <BasicLayout path="/" component={BasicLayout} />  
        </Switch>
      </BrowserRouter>
    );
  }
}

export default NetworkDetector(Main);