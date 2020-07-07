import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';

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
        }
      })();
    }
  }, []);

  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Main data={(refreshToken, accessToken, setAcessToken, serverURL)} />
    //     </Route>
    //     <Route exact path="/login">
    //       <Login />
    //     </Route>
    //     <Route exact path="/register">
    //       <Register />
    //     </Route>
    //     <Route component={NotFound} />
    //   </Switch>
    // </Router>
    <div>This is a test</div>
  );
};

export default App;
