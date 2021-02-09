import React, { useState } from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';

import { Home } from './components/Home/Home';
import { SignUp } from './components/SignUp/SignUp';
import { SignIn } from './components/SignIn/SignIn';
import { User } from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const addUser = (newUser) => {
    setUsers(availableUsers => [...availableUsers, newUser]);
  };

  const handleDisplayPassword = (field, callback, state) => {
    const passwordInput = document.querySelector(`#${field}`);

    state ? passwordInput.type = 'password' : passwordInput.type = 'text';
    callback(!state);
  };

  const registrationUser = users.find(user => user.email === email
    && user.password === password);
  const authUser = users.find(user => user.email === signInEmail
    && user.password === signInPassword);

  return (
    <div className="app">
      <HashRouter>
        <div>
          {/* <nav>
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
          </nav> */}
          <div className="app__mobile">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/sign-up">
                <SignUp
                  addUser={addUser}
                  users={users}
                  setEmail={mail => setEmail(mail)}
                  email={email}
                  setPassword={pass => setPassword(pass)}
                  password={password}
                  handleDisplayPassword={handleDisplayPassword}
                />
              </Route>
              <Route exact path="/sign-in">
                <SignIn
                  users={users}
                  setEmail={mail => setSignInEmail(mail)}
                  email={signInEmail}
                  setPassword={pass => setSignInPassword(pass)}
                  password={signInPassword}
                  authUser={authUser}
                  handleDisplayPassword={handleDisplayPassword}
                />
              </Route>
              <Route exact path="/user">
                <User
                  user={authUser || registrationUser}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
