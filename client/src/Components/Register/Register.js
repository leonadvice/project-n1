import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import checkLogin from '../../Controllers/checkLogin';
import postRequest from '../../Controllers/postRequest';
import SuccessRegister from './SuccessRegister';

export default () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [handle, setHandle] = useState('');
  const [handleErr, setHandleErr] = useState('');
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    checkLogin(setIsLogin);
  }, []);

  async function handleChange(e, field, state, setState, setStateErr) {
    setState(e.target.value);
    const payLoad = {};
    payLoad[field] = state;
    const reponse = await postRequest('/auth/register', payLoad);
    if (reponse.error) {
      setStateErr(reponse.error);
    } else {
      setStateErr('');
    }
  }

  if (isLogin) {
    return <Redirect to="/" />;
  }

  if (success) {
    return <SuccessRegister email={email} />;
  }

  return (
    <div>
      <div>
        Email:{' '}
        <input
          type="text"
          onChange={(e) => handleChange(e, 'email', email, setEmail, setEmailErr)}
        />
      </div>
      <div>{emailErr}</div>
      <div>
        Unique Handle:{' '}
        <input
          type="text"
          onChange={(e) => handleChange(e, 'handle', handle, setHandle, setHandleErr)}
        />
      </div>
      <div>{handleErr}</div>
      <div>
        Display Name:{' '}
        <input
          type="text"
          onChange={(e) => handleChange(e, 'name', name, setName, setNameErr)}
        />
      </div>
      <div>{nameErr}</div>
      <div>
        Password:{' '}
        <input
          type="password"
          onChange={(e) =>
            handleChange(e, 'password', password, setPassword, setPasswordErr)
          }
        />
      </div>
      <div>{passwordErr}</div>
      <input type="button" value="Register" />
    </div>
  );
};
