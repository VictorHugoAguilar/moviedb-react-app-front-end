import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Movie.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHandPointRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { Card, Button } from 'react-bootstrap';

class Movie extends Component {
    selectMovie(id) {
        sessionStorage.setItem('movieId', id);
        return false;
    }

    render() {
        const { movie } = this.props;
        let httpImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        let overview = movie.overview;

        return (
            <div className="movie">
                <Card>
                    <Card.Img variant="top" src={httpImage} />
                    <Card.Body>
                        <Card.Title>{movie.title} - ( {movie.original_title} )</Card.Title>
                        <Card.Text>
                            {`${overview.substr(0, 250)}... `}
                            <Link to="/MovieInfo" > 
                                <Button size="sm" variant="outline-dark" onClick={(e) => {
                                        this.selectMovie(movie.id);
                                        this.props.setPage()
                                }}> más info aquí </Button>
                            </Link>
                            <div class="movie-estadist">
                                <div className="movie-estadist-bloque">
                                    <FontAwesomeIcon icon={faThumbsUp} /> {movie.vote_average}
                                    {movie.popularity}
                                </div>
                                <div className="movie-estadist-bloque">
                                    <FontAwesomeIcon icon={faHandPointRight} /> {movie.vote_average}
                                    {movie.vote_count}
                                </div>
                                <div className="movie-estadist-bloque">
                                    <FontAwesomeIcon icon={faStar} /> {movie.vote_average}
                                    </div>
                            </div>
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