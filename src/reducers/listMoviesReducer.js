import TYPE from '../type';

const initialState = {
    movies: []
};


const listMoviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPE.GET_CARTELERA:
            return {
                ...state,
                movies:action.payload
            }

        default: {
            return initialState;
        }
    }
}

export default listMoviesReducer;