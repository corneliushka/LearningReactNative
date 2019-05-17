// API/TMDBApi.js

const API_TOKEN = "610c4cb8fcd779ec5c11a44b767b6640";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN +
    '&language=fr&query=' + text
        return fetch(url)
            .then((response) => response.json()) // convertit la réponse de notre API en JSON et la retourne
            .catch((error) => console.error(error))
}

// fonction pour construire l'url d'une image
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}