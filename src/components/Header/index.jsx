import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

import CONSTANTS from '../../kconstants'
// Importamos los estilos personalizados con SASS
import './Header.scss';
import logo from '../../assets/img/logo.jpg'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const RUTA = CONSTANTS.RUTA;
const API_KEY = CONSTANTS.API_KEY;
const LANGUAGE = CONSTANTS.LANGUAGE;



class Header extends Component {

    /* componentDidMount(){
         this.props.setActive()
     }
 */
    state = {
        generos: []
    }


    componentDidMount() {
        const { generos } = this.state;

        // Construimos la ruta del enlace
        let url = `${RUTA}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;

        // Solicitamos la info desde la API con fetch
        fetch(url)
            .then((response) => {
                response.json().then((data) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        console.log(data.genres)
                        let datos = data.genres;
                        datos.map( res => ( generos.push(res) ) )
                    }
                })
                this.setState({ generos });
            }).catch( error => console.error(error));
    }


    render() {
        const { generos } = this.state;

        return (<div className="header">
            <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="logo" id="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto navbar-nav">
                        <Nav.Link className="navlink card active" onClick={(e) => this.props.getCartelera(e.target.value)}>En Cartelera</Nav.Link>
                        <Nav.Link className="navlink" onClick={(e) => this.props.getEstrenos(e.target.value)}>Estrenos</Nav.Link>
                        <Nav.Link className="navlink" onClick={(e) => this.props.getMostPopular(e.target.value)}>Populares</Nav.Link>
                        <Nav.Link className="navlink" onClick={(e) => this.props.getTopRated(e.target.value)}>Top Rated</Nav.Link>
                        <NavDropdown className="navlink" title="Genero" id="basic-nav-dropdown">
                            {
                                generos.map( (gener, index) => (
                                    <NavDropdown.Item 
                                        key={index} 
                                        onClick={() => this.props.getByGenero( gener.id )}
                                    > {gener.name} </NavDropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                    <div className="navbar-nav" >
                        <DebounceInput
                            className="navbar-input mr-sm-2"
                            element="input"
                            debounceTimeout={400}
                            type="text"
                            placeholder="Buscar Película..."
                            value={this.props.query}
                            onChange={(e) => this.props.searchData(e.target.value)} />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Header;