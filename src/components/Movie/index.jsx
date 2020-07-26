import React, { Component } from 'react';

class Movie extends Component{

    render(){
        const {movie}= this.props;
        let httpImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const selectMovie = (id) => {
            sessionStorage.setItem('movieId', id);
            return false;
        }

        return(
            <div className="movie">
                <Link to="/MovieInfo">
                    <div className="movie-item" 
                         onClick={(e) => {
                                    this.selectMovie(movie.id); 
                                    this.props.setPage()
                                    }} >
                            <div 
                                className="movie-cover" 
                                style={styles} >
                                <div className="movie-rating">
                                    <span className="star">
                                    <FontAwesomeIcon 
                                    icon={faStar}/></span>
                                    <h6>{movie.vote_average}</h6>
                                </div>
                            </div>
                            <div className="movie-text">
                                <h6>{movie.title}{movie.name}</h6>
                            </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Movie;