import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

import { Home } from './components/Home/Home';
import { SignUp } from './components/SignUp/SignUp';
import { SignIn } from './components/SignIn/SignIn';
import { User } from './components/User/User';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </nav>
          <div className="app__mobile">
            {/* <div className="app__mobile-container"> */}
              <Switch>
                <Route axact path="/sign-up">
                  <SignUp />
                </Route>
                <Route exact path="/sign-in">
                  <SignIn />
                </Route>
                <Route exact path="/user">
                  <User />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            {/* </div> */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
