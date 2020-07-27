import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../kconstants/';
// Importamos los componentes de fontawesome e iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// Importamos los estilos personalizados
import './MovieInfo.scss';
// Importamos los componentes desde react bootstrap
import { Badge, Button, Alert } from 'react-bootstrap';

const RUTA = CONSTANTS.RUTA;
const API_KEY = CONSTANTS.API_KEY;
const LANGUAGE = CONSTANTS.LANGUAGE;

// Declaramos las variables que rellenaremos desde el state
let poster, title, name, tagline, overview, release, background,
    runtime, status, homepage, rating, err, code;
let genero = [];
let company = [];

class MovieInfo extends Component {
    state = {
        movieInfo: []
    }

    componentDidMount() {
        const { movieInfo } = this.state;
        // Obtenemos los datos del storage session
        let movieId = sessionStorage.getItem('movieId');
        let page = sessionStorage.getItem('Page');

        // Construimos la ruta del enlace
        let url = `${RUTA}/${page}/${movieId}?api_key=${API_KEY}&append_to_response=credits&language=${LANGUAGE}`;
        // Solicitamos la info desde la API con fetch
        fetch(url)
            .then((response) => {
                response.json().then((data) => {
                    let info;
                    if (response.status === 200) {
                        info = {
                            code: 200,
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
                            background: data.backdrop_path,
                            runtime: data.runtime,
                            homepage: data.homepage
                        };
                    } else {
                        info = { 
                            code: 500,
                            error: "No se han recibido datos desde la API" 
                        };
                    }
                    movieInfo.push(info);
                    this.setState({ movieInfo });
                })
            })
    }

    // Obtenemos los datos mapeandolo en las variables
    hadlerGetDataFromState() {
        const { movieInfo } = this.state;
        if (movieInfo[0] !== undefined && movieInfo[0].title) {
            movieInfo.map(info => (
                title = info.title,
                name = info.name,
                tagline = info.tagline,
                overview = info.overview,
                runtime = info.runtime,
                status = info.status,
                homepage = info.homepage,
                rating = info.rating,
                release = info.release,
                background = `https://image.tmdb.org/t/p/original${info.background}`,
                poster = `https://image.tmdb.org/t/p/w500${info.poster}`,
                info.genres.map((gene) => (
                    genero.push(gene.name))
                ),
                info.companies.map((compa) => (
                    company.push(compa.name)))
            ));
        }else{
            movieInfo.map(info => (
                code = info.code,
                err = info.error 
                )
            );
        }
    }

    // Renderizamos el componente
    render() {
        this.hadlerGetDataFromState();
        const styles = { width: '100%', backgroundImage: background ? (`url(${background})`) : null }
        return (
            <div className="movieInfo" style={styles}>
               { code === 500 ?  
                <Alert variant="danger"  >
                    <Alert.Heading> <FontAwesomeIcon icon={faExclamationCircle} />  Error 500 </Alert.Heading>
                    <p>
                    {err}
                    </p>
                </Alert>
                :
                <section className="infoSection">
                    <div className="outer-container">
                        <div className="container-box">
                            <div className="infoBox">
                                <div className="poster">
                                    <img alt={title} src={poster} />
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
                                                <p>{release}</p>
                                            </div>
                                            <div className="details">
                                                <h4>Estado</h4>
                                                <p>{status}</p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="details">
                                                <h4>Duración</h4>
                                                <p>{runtime} min</p>
                                            </div>
                                            <div className="details">
                                                <h4>Estadísticas</h4>
                                                <p>{rating}/10</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="links">
                                        <Button className="links-button mr-2" variant="info"><Link className="link" to="/"> <FontAwesomeIcon icon={faArrowCircleLeft} /> Volver a la lista de Películas</Link></Button>
                                        <Button className="links-button mr-2" variant="info"><a className="link" rel="noopener noreferrer" href={homepage} target="_blank">Ir al sitio oficial</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               }
            </div>
        );
    }
}
export default MovieInfo;