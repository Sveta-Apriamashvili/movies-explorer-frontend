export const BASE_URL = 'https://api.study.movies.nomoredomains.club';

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        'name': data.name,
        'email': data.email,
        'password': data.password
      })
    })
    .then(_handleResponse)
};

export const login = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      'email': data.email,
      'password': data.password
    })
  })
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(_handleResponse);
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
      method: 'POST',
      credentials: 'include',
    })
    .then(_handleResponse);
};

export const getUserInfo = () => {
  const url = `${BASE_URL}/users/me`
  return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(_handleResponse);
};

export const editUserInfo = (data) => {
  const url = `${BASE_URL}/users/me`
  return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        'name': data.name,
        'email': data.email
      })
    })
    .then(_handleResponse);
};

function _handleResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};