import TYPE from '../type';
import CONSTANTS from '../kconstants'

import $ from 'jquery';

const RUTA = CONSTANTS.RUTA;
const API_KEY = CONSTANTS.API_KEY;
const LANGUAGE = CONSTANTS.LANGUAGE;

export const getCartelera = () => dispatch => {
    $('.list').addClass('active');
    const url = `${RUTA}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
    fetch(url)
        .then(response => response.json())
        .then(movies => {
        console.log(movies.results)
            dispatch({
            type: TYPE.GET_CARTELERA,
            payload: movies.results
        })})
        .catch(error => console.error('No podemos obtener datos del servidor', error));
}

export const searchMovies = (query) => dispatch => {
    const url = `${RUTA}/search/movie?api_key=${API_KEY}&query=${query}`;
    if (query === '') {
        dispatch(getCartelera());
    } else {
        $('.list .active').removeClass('active');
        console.log(query)
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then((movies) => {
                if (movies.results.error) {
                    dispatch(getCartelera());
                } else {
                    console.log(movies.results)
                    dispatch({
                        type: TYPE.GET_SEARCH,
                        payload: movies.results
                    });
                }
            }).catch(error => console.error('No podemos obtener datos del servidor', error));
    }
}


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