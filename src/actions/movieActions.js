import TYPE from '../type';
import CONSTANTS from '../kconstants'

import $ from 'jquery';

const RUTA = CONSTANTS.RUTA;
const API_KEY = CONSTANTS.API_KEY;
const LANGUAGE = CONSTANTS.LANGUAGE;

export const getCartelera = () => dispatch => {
    const url = `${RUTA}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
    fetch(url)
        .then(response => response.json())
        .then(movies => dispatch({
            type: TYPE.GET_CARTELERA,
            payload: movies.results
        }))
}

export const searchMovies = (query) => dispatch => {
    const url = `${RUTA}/search/movie?api_key=${API_KEY}&query=${query}`

    if (query === '') {
        dispatch(getCartelera())
    } else {
        $('.list .active').removeClass('active');

        fetch(url)
            .then(response => response.json())
            .then((movies) => {
                if (movies.results.error) {
                    dispatch(getCartelera())
                } else {
                    dispatch({
                        type: TYPE.GET_SEARCH,
                        payload: movies.results
                    })
                }
            }).catch(error => console.error('No podemos obtener datos del servidor', error))
    }
}