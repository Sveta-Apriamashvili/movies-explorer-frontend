export const BASE_URL = 'https://api.study.movies.nomoredomains.club';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })
    })
    .then(_handleResponse)
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      'email': email,
      'password': password
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

export const editUserInfo = ({
  name,
  email
}) => {
  const url = `${BASE_URL}/users/me`
  return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
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