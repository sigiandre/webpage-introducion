import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import Contacto from "./Contacto";
import About from "./About";
import DigimonList from './DigimonList'
import Digimon from './Digimon'
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/digimon" exact component={DigimonList}/>
          <Route path="/digimon/name/:name" component={Digimon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
