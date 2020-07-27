import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// Importamos los estilos personalizados con SASS
import './App.scss';
// Importamos los componentes personalizados
import Footer from './components/Footer';
import FullListMovies from './components/FullListMovies';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => (
          <FullListMovies />
        )} />
        <Route path="/MovieInfo" render={() => (
          <MovieInfo />
        )} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
