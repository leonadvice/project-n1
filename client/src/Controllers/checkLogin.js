import postRequest from './postRequest';

export default async (setIsLogin) => {
  if (window.localStorage.getItem('chatAppRefreshToken')) {
    if (!(await postRequest('/auth/token'))) {
      setIsLogin(false);
      window.localStorage.removeItem('chatAppRefreshToken');
    } else {
      setIsLogin(true);
    }
  } else {
    setIsLogin(false);
  }
};
