import React, { Component, Suspense, lazy } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter,
} from "react-router-dom";
import "./../css/style.css";

const Home = lazy(() => import("./../View/Home"));
const Stuff = lazy(() => import("./../View/Stuff"));
const Contact = lazy(() => import("./../View/Contact"));

class BasicLayout extends Component {
  logoutHandler = (e) => {
    const { history } = this.props;
    if (history) history.push(process.env.PUBLIC_URL + '/login');
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <Link exact="true" to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/stuff'>Stuff</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link onClick={(e) => this.logoutHandler(e)} to='/login'>
                Login
              </Link>
            </li>
          </ul>
          <div className="content">
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path='/' component={Home} />
                <Route path='/stuff' component={Stuff} />
                <Route path='/contact' component={Contact} />
              </Suspense>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(BasicLayout);
