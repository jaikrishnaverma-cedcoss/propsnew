import React from 'react';
import './App.css';
import Compo1 from './Component/Compo1';
import Level1 from './Component/Level1'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Q1. Make a class component as child of App.js and pass your name as prop, then "Hello name" must be printed.</h1>
        <Compo1 name="Jai"/>
        <h1>Q2. Pass a property named username from Top class component to down most class component in the component hierarchy and print it</h1>
         <Level1 username="jai001"/>
      </header>
    </div>
  );
}

export default App;
