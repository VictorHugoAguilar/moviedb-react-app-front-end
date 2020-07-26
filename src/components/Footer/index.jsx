import React, { Component } from 'react';
// Importamos los estilos personalizados
import './Footer.scss';
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'


class Footer extends Component {


    render() {
        return (
        <div className="footer">
            <p className="footer-text">desing, by 
            <FontAwesomeIcon icon={faCoffee} />
            <a href="https://github.com/VictorHugoAguilar?tab=repositories" target="_blank">#victorHugo</a>.
            </p>
        </div>
        );
    }

}

export default Footer;


