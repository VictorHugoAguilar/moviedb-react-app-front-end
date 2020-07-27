import React, { Component } from 'react';
import { connect } from 'react-redux'



// Importamos los componentes personalizados
import ListMovie from '../ListMovies';


import { getCartelera } from '../../actions';


class FullListMovies extends Component {

    componentDidMount() {
        // Seteamos por defecto las de cartelera
        this.props.getCartelera();
    }

    setFetchMovies() {
        sessionStorage.setItem('Page', 'movie');
        return false;
    }

    render() {
        return ( <
            ListMovie movies = { this.props.movies }
            setPage = { this.setFetchMovies }
            />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
})

export default connect(mapStateToProps, { getCartelera })(FullListMovies);