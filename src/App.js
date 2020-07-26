import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
// Importamos los estilos personalizados con SASS
import './App.scss';
// Importamos los componentes personalizados
import  Header  from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <div className="container">
      </div>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
