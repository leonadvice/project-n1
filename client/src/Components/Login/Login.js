import React from 'react';

export default () => {
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
