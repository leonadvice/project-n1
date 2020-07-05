import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './Components/Main/Main';

const App = () => {
  const [refreshToken, setRefreshToken] = useState('');
  const [accessToken, setAcessToken] = useState('');
  const [serverURL, setServerURL] = useState('http://localhost:3001/');

  const setLocalStorage = (validTokens) => {
    window.localStorage.setItem('refreshToken', refreshToken);
    setRefreshToken(validTokens.refreshToken);
    setAcessToken(validTokens.accessToken);
    console.log(window.localStorage.getItem('refreshToken'));
  };

  const postRequest = async (route, data = {}) => {
    const response = await fetch(serverURL + route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  useEffect(() => {
    if (window.localStorage.getItem('refreshToken')) {
      (async () => {
        const validTokens = await postRequest('token', {
          token: window.localStorage.getItem('refreshToken'),
        });
        if (validTokens) {
          setLocalStorage(validTokens);
          console.log('token is valid, redirect to user page');
        } else {
          console.log('token is not valid, redirect to login page');
        }
      })();
    } else {
      console.log(
        'there is no refresh token in local storage, redirect user to login page'
      );
    }
  }, []);

  return (
    <Router>
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
      </Switch>
    </Router>
  );
};

export default App;
