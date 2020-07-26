import CONSTANTS  from '../type';

const ruta = 'https://api.themoviedb.org/3';
const apiKey = '7c3478971dd7448978e62b257855f491';
const language = 'es-ES';

export const getCartelera = () => dispatch => {
    const url = `${ruta}/movie/now_playing?api_key=${apiKey}&language=${language}&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:CONSTANTS.GET_CARTELERA,
        payload: movies.results
    }))
}

