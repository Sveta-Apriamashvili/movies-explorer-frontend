export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(_getResponseData)
};

function _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
};