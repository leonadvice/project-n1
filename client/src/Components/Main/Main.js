import React, { useEffect } from 'react';
import Login from '../Login/Login';

export default (props) => {
  if (!props.data.refreshToken) {
    return <Login />;
  }

  return <div>This is the main page</div>;
};
