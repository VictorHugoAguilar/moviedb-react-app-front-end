import { combineReducers } from 'redux';
// Importamos los reducers
import listMoviesReducer from './listMoviesReducer';

export default combineReducers({
    movies: listMoviesReducer
});