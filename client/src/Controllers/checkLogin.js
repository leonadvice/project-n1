import postRequest from './postRequest';

export default async (setIsLogin) => {
  if (window.localStorage.getItem('chatAppRefreshToken')) {
    if (!(await postRequest('/auth/token'))) {
      console.log('server return false');
    } else {
      console.log('server return true');
    }
  } else {
    console.log('no token');
  }
};
