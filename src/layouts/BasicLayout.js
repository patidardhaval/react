import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
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
            <Router>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact activeClassName="active"  to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/stuff">Stuff</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
            <li><NavLink onClick={e=>this.logoutHandler(e)} to="/login">Login</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </Router>
        );
    }
}

export default BasicLayout;