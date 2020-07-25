import React from 'react';
// Importamos los estilos personalizados con SASS
import './App.scss';
// Importamos los componentes personalizados
import  Header  from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      </div>
    </div>
  );
}

export default App;
