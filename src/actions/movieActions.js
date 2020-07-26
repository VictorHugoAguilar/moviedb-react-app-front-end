import CONSTANTS from '../type';

import $ from 'jquery';

const ruta = 'https://api.themoviedb.org/3';
const apiKey = '7c3478971dd7448978e62b257855f491';
const language = 'es-ES';

export const getCartelera = () => dispatch => {
    const url = `${ruta}/movie/now_playing?api_key=${apiKey}&language=${language}&page=1`
    fetch(url)
        .then(response => response.json())
        .then(movies => dispatch({
            type: CONSTANTS.GET_CARTELERA,
            payload: movies.results
        }))
}

export const searchMovies = (query) => dispatch => {
    const url = `${ruta}/search/movie?api_key=${apiKey}&query=${query}`

    if (query === '') {
        dispatch(getCartelera())
    } else {
        $('.list .active').removeClass('active');

        fetch(url)
            .then(response => response.json())
            .then((movies) => {
                //remove error on empty string, and set movies to default upcoming
                if (movies.results.error) {
                    dispatch(getCartelera())
                } else {
                    dispatch({
                        type: CONSTANTS.GET_SEARCH,
                        payload: movies.results
                    })
                }
            }).catch(error => console.error('Cant fetch any data', error))
    }
}