import React, { useState, useEffect } from 'react';
import checkLogin from '../../Controllers/checkLogin';

export default () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    checkLogin(setIsLogin);
  }, []);

  return (
    <div>
      Email: <input type="text" id="email" />
      <br />
      Password: <input type="password" id="password" />
      <br />
      Confirm Password: <input type="password" id="confirmPassword" />
      <br />
      <input type="button" value="login" />
    </div>
  );
};
