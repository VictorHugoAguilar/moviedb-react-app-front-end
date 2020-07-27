import TYPE from '../type';
// Inicializamos el estado
const initialState = {
    movies: []
};
// Swich de reducers
const listMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_CARTELERA:
            return {
                ...state,
                movies: action.payload
            };
        case TYPE.GET_SEARCH: 
            return {
                ...state,
                movies: action.payload
            };
        case TYPE.GET_ESTRENO:
            return {
                ...state,
                movies: action.payload
        };
        case TYPE.GET_POPULAR: 
            return {
                ...state,
                movies: action.payload
        };
        case TYPE.GET_TOP_RATED: 
            return {
                ...state,
                movies: action.payload
        };
        case TYPE.GET_BY_GENERO: 
            return {
                ...state,
                movies: action.payload
        };
        default: 
            return initialState;
    }
}
export default listMoviesReducer;