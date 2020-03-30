import React, { Component } from "react";
import { BrowserRouter, Route,Switch, Link, withRouter } from "react-router-dom";
import Home from "./../View/Home";
import Stuff from "./../View/Stuff";
import Contact from "./../View/Contact";
import "./../css/style.css";
class BasicLayout extends Component {
  logoutHandler = (e) => {
    const { history } = this.props;
    if (history) history.push('/login');
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li ><Link exact="true" to="/">Home</Link></li>
            <li><Link to="/stuff">Stuff</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link onClick={e => this.logoutHandler(e)} to="/login">Login</Link></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(BasicLayout);