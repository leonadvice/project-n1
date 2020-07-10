import React, { useState, useEffect } from 'react';
import checkLogin from '../../Controllers/checkLogin';
import { Redirect } from 'react-router-dom';

export default () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    checkLogin(setIsLogin);
  }, []);

  if (isLogin) {
    console.log(isLogin);
    return <Redirect to="./" />;
  }

  return (
    <div>
      Unique Handle: <input type="text" id="handle" />
      <br />
      Email: <input type="text" id="email" />
      <br />
      Password: <input type="password" id="password" />
      <br />
      Confirm Password: <input type="password" id="confirmPassword" />
      <br />
      Display Name: <input type="text" id="displayName" />
      <br />
      <input type="button" value="Register" />
    </div>
  );
};
