// API/TMDBApi.js

const API_TOKEN = "VOTRE_TOKEN_ICI";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + '610c4cb8fcd779ec5c11a44b767b6640' + '&language=fr&query=' + text
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.error(error))
}