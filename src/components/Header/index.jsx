import React, { Component } from 'react';

// Importamos los estilos personalizados con SASS
import './Header.scss';
import logo from '../../assets/img/logo.jpg'

import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';



class Header extends Component {

    

    render() {
        return (<div className="header">
            <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="logo" id="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto navbar-nav">
                        <Nav.Link  className="navlink" href="#home" >En Cartelera</Nav.Link>
                        <Nav.Link className="navlink" href="#home">Estrenos</Nav.Link>
                        <Nav.Link className="navlink" href="#home">Populares</Nav.Link>
                        <Nav.Link  className="navlink" href="#home">Top Rated</Nav.Link>
                        <NavDropdown className="navlink" title="Genero" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/ninos">Niños</NavDropdown.Item>
                            <NavDropdown.Item href="#action/accion">Accion</NavDropdown.Item>
                            <NavDropdown.Item href="#action/comedia">Comedia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/terror">Terror</NavDropdown.Item>
                            <NavDropdown.Item href="#action/drama">Drama</NavDropdown.Item>
                            <NavDropdown.Item href="#action/suspenso">Suspenso</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="navbar-nav" inline>
                        <FormControl  type="text" placeholder="Buscar Película" className="navbar-input mr-sm-2" />
                        <Button className="navlink" >Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Header;