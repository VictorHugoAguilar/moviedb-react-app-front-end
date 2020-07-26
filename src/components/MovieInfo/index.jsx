import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../kconstants/';
import $ from 'jquery';
// Importamos los componentes de fontawesome e iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './MovieInfo.scss';

import { Badge, Button } from 'react-bootstrap';

const RUTA = CONSTANTS.RUTA;
const API_KEY = CONSTANTS.API_KEY;
const LANGUAGE = CONSTANTS.LANGUAGE;

class MovieInfo extends Component {
    state = {
        movieInfo: []
    }

    componentDidMount() {
        console.log("compoenent componentDidMount");

        const { movieInfo } = this.state;
        // Obtenemos los datos del storage session
        let movieId = sessionStorage.getItem('movieId');
        let page = sessionStorage.getItem('Page');

        console.log(movieId);

        // Construimos la ruta del enlace
        let url = `${RUTA}/${page}/${movieId}?api_key=${API_KEY}&append_to_response=credits&language=${LANGUAGE}`;
        // Solicitamos la info desde la API con fetch
        fetch(url)
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    let info;
                    if (response.status === 200) {
                        info = {
                            tagline: data.tagline,
                            poster: data.poster_path,
                            genres: data.genres,
                            title: data.title,
                            name: data.name,
                            status: data.status,
                            overview: data.overview,
                            rating: data.vote_average,
                            companies: data.production_companies,
                            release: data.release_date,
                            startSeries: data.first_air_date,
                            background: data.backdrop_path,
                            runtime: data.runtime,
                            episodeRuntime: data.episode_run_time,
                            homepage: data.homepage
                        };
                    } else {
                        info = { name: "No se han recibido datos desde la API" };
                    }
                    movieInfo.push(info);
                    this.setState({ movieInfo });
                    console.log({ movieInfo })
                })
            })
    }

    render() {
        const { movieInfo } = this.state
        let poster,
            title,
            name,
            tagline,
            overview,
            release,
            background,
            runtime,
            status,
            homepage,
            rating,
            startSeries,
            episodeRuntime;
        let genero = [];
        let company = [];

        movieInfo.map((info) => (
            title = info.title,
            name = info.name,
            tagline = info.tagline,
            overview = info.overview,
            runtime = info.runtime,
            episodeRuntime = info.episodeRuntime,
            status = info.status,
            homepage = info.homepage,
            rating = info.rating,
            startSeries = info.startSeries,
            release = info.release,
            background = `https://image.tmdb.org/t/p/original${info.background}`,
            poster = `https://image.tmdb.org/t/p/w500${info.poster}`,
            info.genres.map((gene) => (
                genero.push(gene.name))
            ),
            info.companies.map((compa) => (
                company.push(compa.name)))
        ))

        { console.log(homepage) }
        const styles = { width: '100%', backgroundImage: background ? (`url(${background})`) : null }
        return (
            <div className="movieInfo" style={styles}>
                <section className="infoSection">
                    <div className="outer-container">
                        <div className="container-box">
                            <div className="infoBox">
                                <div className="poster">
                                    <img src={poster} />
                                </div>
                                <div className="info">
                                    <div className="movie-name">
                                        <h1>{title}</h1>
                                        <h4>{name}</h4>
                                    </div>

                                    <div className="overview">
                                        <h4>{tagline}</h4>
                                        <p>{overview}</p>
                                    </div>

                                    <div className="genres-companies">
                                        <h4> Genero</h4>
                                        {genero.map((gene, index) => (
                                            <Badge key={index} className="mr-2" variant="info">{gene}</Badge>
                                        )
                                        )}

                                        <h4> Compañia </h4>
                                        {company.map((compa, index) => (
                                            <Badge key={index} className="mr-2" variant="info">{compa}</Badge>
                                        )
                                        )}
                                    </div>
                                    <div className="detail-container">
                                        <div className="column">
                                            <div className="details">
                                                <h4>Fecha de estreno</h4>
                                                <p>{release}{startSeries}</p>
                                            </div>
                                            <div className="details">
                                                <h4>Estado</h4>
                                                <p>{status}</p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="details">
                                                <h4>Duración</h4>
                                                <p>{runtime}{episodeRuntime} min</p>
                                            </div>
                                            <div className="details">
                                                <h4>Estadísticas</h4>
                                                <p>{rating}/10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="links">
                                        <Button className="mr-2" variant="info"><Link className="link" to="/"> <FontAwesomeIcon icon={faArrowCircleLeft} /> Volver a la lista de Películas</Link></Button>
                                        <Button className="mr-2" variant="info"><a className="link" href={homepage} target="_blank">Ir al sitio oficial</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default MovieInfo;