import React, {Component} from 'react';
import { connect } from 'react-redux'

// Importamos los componentes personalizados
import ListMovie from '../ListMovies';

import { getCartelera } from '../../actions';


class FullListMovies extends Component {

    componentDidMount() {
        //set upcoming movies as a default
        this.props.getCartelera()
    }

    setFetchMovies() {
        sessionStorage.setItem('Page', 'movie');
        return false;
    }

    render() {
        return (
            <ListMovie movies={this.props.movies} setPage={this.setFetchMovies} />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.searchedMovies,
})

export default connect(mapStateToProps, { getCartelera })(FullListMovies);