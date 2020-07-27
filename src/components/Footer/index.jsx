import React, { Component } from 'react';
// Importamos los estilos personalizados
import './Footer.scss';
// Importamos fontAwesomeIcon y el icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
/**
 * Class Footer
 */
class Footer extends Component {
    render() {
        return (
        <div className="footer">
            <p className="footer-text">desing, by 
            <FontAwesomeIcon icon={faCoffee} />
            <a rel="noopener noreferrer" href="https://github.com/VictorHugoAguilar?tab=repositories" target="_blank">#victorHugo</a>.
            </p>
        </div>
        );
    }
}
export default Footer;


