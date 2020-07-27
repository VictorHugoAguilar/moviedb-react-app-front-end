import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// Importamos los componentes personalizados
import ListMovie from '../ListMovies';
import Header from '../Header';
// Importamos los componentes de react-bootstrap
import { Alert } from 'react-bootstrap';
// Importamos los componentes de fontawesome e iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// Importamos las acciones
import { getCartelera, searchMovies, getMostPopular, getEstrenos, getTopRated, getByGenero } from '../../actions';
// Importamos los estilos personalizados
import './FullListMovies.scss';
import $ from "jquery";


class FullListMovies extends Component {

    componentDidMount() {
        // Seteamos por defecto las de cartelera
        this.props.getCartelera();
    }

    setFetchMovies() {
        sessionStorage.setItem('Page', 'movie');
        return false;
    }

    setActive = () => {
        $('.list li').click(function() {
            $('.list .active').removeClass('active');
            $(this).addClass('active');
        })
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate FullListMovies",this.props.movies.length);
    }

    render() {
        return ( <
            Fragment >
            <
            Header searchData = { this.props.searchMovies }
            getCartelera = { this.props.getCartelera }
            getMostPopular = { this.props.getMostPopular }
            getEstrenos = { this.props.getEstrenos }
            getTopRated = { this.props.getTopRated }
            getByGenero = { this.props.getByGenero }
            setActive = { this.setActive }
            /> <
            div className = "container fullListMovies" > {
                this.props.movies.length === 0 ?
                <
                div className = "fullListMovies-Alert" >
                <
                Alert variant = "danger" >
                <
                Alert.Heading > < FontAwesomeIcon icon = { faExclamationCircle }
                /> Película no encantrada </Alert.Heading >
                <
                p >
                La película que ha buscado no se ha encontrado en la BD de THE MOVIE DB. <
                /p> <
                /Alert> <
                /div> :
                    <
                    ListMovie movies = { this.props.movies }
                setPage = { this.setFetchMovies }
                />
            } <
            /div> <
            /Fragment>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
})

export default connect(mapStateToProps, { getCartelera, searchMovies, getMostPopular, getEstrenos, getTopRated, getByGenero })(FullListMovies);