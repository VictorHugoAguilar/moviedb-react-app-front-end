import React from 'react';
import Movie from '../Movie';

const ListMovie = (props) => {

    return (
        <div className="listMovie">
            <div className="wrap">
                {props.movies?.map((movie) => (
                    <Movie
                        key={movie.id}
                        movie={movie}
                        getInfo={props.getInfo}
                        setPage={props.setPage}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListMovie;
