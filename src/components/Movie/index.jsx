import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Importamos los estilos personalizados
import './Movie.scss';
// Importamos componentes de bootstrap
import { Card, Button } from 'react-bootstrap';
// Importamos los componentes de fontawesome e iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHandPointRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// importamos la imagen de no imagen
import noImagen from '../../assets/img/noimg.png'

class Movie extends Component {
    selectMovie(id) {
        sessionStorage.setItem('movieId', id);
        console.log(id)
        return false;
    }

    componentDidUpdate(){
        console.log(this.props.movie.poster_path)
    }

    render() {
        const { movie } = this.props;
        let httpImage = (movie.poster_path === null) ? noImagen :`https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        let overview = movie.overview;

        return (
            <div className="movie">
                <Card>
                    <Card.Img variant="top" src={httpImage} />
                    <Card.Body>
                        <Card.Title>{movie.title} - ( {movie.original_title} )</Card.Title>
                        <Card.Text>
                            <span className="small">
                                {`${overview.substr(0, 100)}... `}
                            </span>
                            <Link to="/MovieInfo" >
                                <Button size="sm" variant="outline-dark" onMouseDown={(e) => {
                                    this.selectMovie(movie.id);
                                    this.props.setPage()
                                }}> más info aquí </Button>
                            </Link>
                            <span className="movie-estadist">
                                <span className="movie-estadist-bloque">
                                    <FontAwesomeIcon icon={faThumbsUp} /> {movie.vote_average}
                                    {movie.popularity}
                                </span>
                                <span className="movie-estadist-bloque">
                                    <FontAwesomeIcon icon={faHandPointRight} /> {movie.vote_average}
                                    {movie.vote_count}
                                </span>
                                <span className="movie-estadist-bloque">
                                    <FontAwesomeIcon icon={faStar} /> {movie.vote_average}
                                </span>
                            </span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Fecha de estreno: {movie.release_date}</small>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Movie;