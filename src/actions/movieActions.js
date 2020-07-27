import TYPE from '../type';
// Importamos las constantes
import CONSTANTS from '../kconstants'
// Importamos JQuery
import $ from 'jquery';
const RUTA = CONSTANTS.RUTA;
const API_KEY = CONSTANTS.API_KEY;
const LANGUAGE = CONSTANTS.LANGUAGE;
/**
 * getCartelera()
 * obtenemos desde la api la lista de peliculas en cartelera
 */
export const getCartelera = () => dispatch => {
    $('.list').addClass('active');
    const url = `${RUTA}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            dispatch({
            type: TYPE.GET_CARTELERA,
            payload: movies.results
        })})
        .catch(error => console.error('No podemos obtener datos del servidor', error));
}
/**
 * getByGenero(genero)
 * @param {*} gener
 * Obtenemos las películas que dependan de un genero que se lo pasamos como argumentos 
 */
export const getByGenero = (gener) => dispatch => {
    $('.list').addClass('active');
    const url = `${RUTA}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=${gener}&page=1&sort_by=popularity.desc`;
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            dispatch({
            type: TYPE.GET_BY_GENERO,
            payload: movies.results
        })})
        .catch(error => console.error('No podemos obtener datos del servidor', error));
}
/**
 * searchMovies(query)
 *  * @param {*} query
 * Obtenemos las peliculas desde el cuadro de busqueda pasamos por argumento el nombre
 */
export const searchMovies = (query) => dispatch => {
    const url = `${RUTA}/search/movie?api_key=${API_KEY}&query=${query}`;
    if (query === '') {
        dispatch(getCartelera());
    } else {
        $('.list .active').removeClass('active');
        fetch(url)
            .then(response => response.json())
            .then((movies) => {
                if (movies.results.error) {
                    dispatch(getCartelera());
                } else {
                    dispatch({
                        type: TYPE.GET_SEARCH,
                        payload: movies.results
                    });
                }
            }).catch(error => console.error('No podemos obtener datos del servidor', error));
    }
}
/**
 * getMostPopular()
 * Obtenemos una lista de peliculas clasificadas como más populares
 */
export const getMostPopular = () => dispatch => {
    const url = `${RUTA}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:TYPE.GET_POPULAR,
        payload: movies.results
    }))
    .catch(error => console.error('No podemos obtener datos del servidor', error));
}
/**
 * getEstrenos()
 * Obtenemos una lista de peliculas clasificadas como estrenos
 */
export const getEstrenos = () => dispatch => {
    $('.list .card').addClass('active');
    const url = `${RUTA}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:TYPE.GET_ESTRENO,
        payload: movies.results
    }))
    .catch(error => console.error('No podemos obtener datos del servidor', error));
}
/**
 * getTopRated()
 * Obtenemos una lista de peliculas clasificadas como top rated
 */
export const getTopRated = () => dispatch => {
    const url = `${RUTA}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:TYPE.GET_TOP_RATED,
        payload: movies.results
    }))
    .catch(error => console.error('No podemos obtener datos del servidor', error));
}