import React from 'react';
import Movie from '../Movie';
// Importamos los estilos personalizados
import './ListMovies.scss';
// Importamos componentes de bootsrap
import { CardColumns } from 'react-bootstrap';
/**,
 * class ListMovie
 */
const ListMovie = (props) => {
    return (
        <div className="listMovies">
            <CardColumns>
                {props.movies?.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        getInfo={props.getInfo}
                        setPage={props.setPage}
                    />
                ))}
            </CardColumns>
        </div>
    );
}
export default ListMovie;
