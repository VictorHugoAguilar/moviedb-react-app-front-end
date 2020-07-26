import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// Importamos los estilos personalizados con SASS
import './App.scss';
// Importamos los componentes personalizados
import Header from './components/Header';
import Footer from './components/Footer';
import FullListMovies from './components/FullListMovies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route exact path="/" render={() => (
            <FullListMovies />
          )} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
