import config from '../config.json';

export default async (url, data = {}) => {
  const response = await fetch(config.serverURL + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
