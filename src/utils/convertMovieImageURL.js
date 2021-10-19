const BASE_URL = 'https://api.nomoreparties.co';

const isValidURL = (url) => {
    try {
        new URL(url);
    } catch (e) {
        return false;
    }
    return true;
};

const convertMovieImageURL = (urlCandidate) => {
    if (isValidURL(urlCandidate)) {
        return urlCandidate
    }

    return `${BASE_URL}${urlCandidate.url}`

    
};

export default convertMovieImageURL;