import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';
import config from './config.json'; //do not commit this file

const App = () => {
  useEffect(() => {
    console.log('this code in App inside useEffect');
  }, []);
  return (
    <Router basename="/chat-app/">
      <div>
        <Link to="./">Main</Link>
        <Link to="./login">Login</Link>
        <Link to="./register">Register</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    // <div>This is a test</div>
  );
};

export default App;
