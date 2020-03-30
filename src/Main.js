import React, { Component } from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import LoginLayout from "./layouts/LoginLayout";
import NetworkDetector from "./Helper/NetworkDetector";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path='/login' component={LoginLayout} />
            <Route path="/" component={BasicLayout} />  
        </Switch>
      </BrowserRouter>
    );
  }
}

export default NetworkDetector(Main);