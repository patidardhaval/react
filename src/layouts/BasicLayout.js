import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./../View/Home";
import Stuff from "./../View/Stuff";
import Contact from "./../View/Contact";
import "./../css/style.css";
class BasicLayout extends Component {
    logoutHandler = (e) => {
        this.props.history.push('/login')
    }

    render() {
        return (
      <BrowserRouter basename="demo-app/build/">
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><Link exact activeClassName="active"  to="/">Home</Link></li>
            <li><Link activeClassName="active" to="/stuff">Stuff</Link></li>
            <li><Link activeClassName="active" to="/contact">Contact</Link></li>
            <li><Link onClick={e=>this.logoutHandler(e)} to="/login">Login</Link></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
        );
    }
}

export default BasicLayout;