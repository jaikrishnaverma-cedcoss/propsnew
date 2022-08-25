import React from 'react';
import './App.css';
import Compo1 from './Component/Compo1';
import Level1 from './Component/Level1'; 
import Fcompo1 from './Component/Fcompo1';
import FLevel1 from './Component/FLevel1';
import Operation from './Component/Operation';
import FOperation from './Component/FOperation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Q1. Make a class component as child of App.js and pass your name as prop, then "Hello name" must be printed.</h1>
        <Compo1 name="Jai"/>
        <h1>Q2. Pass a property named username from Top class component to down most class component in the component hierarchy and print it</h1>
         <Level1 username="jai001"/>
         <h1>Q3. Repeat the above two tasks using functional components.</h1>
         <Fcompo1 name="Jai" />
         <FLevel1 username="jai001" />
         <h1>Q4. Make a parent class component and pass two numbers and an operator as props to its child component. The child component must perform the operation on the two numbers and print it.</h1>
        <Operation operator="+" first="4" second="7"/>
        <h1>Q5 Repeat the same task using functional components.</h1>
        <FOperation operator="+" first="4" second="7" />
      </header>
    </div>
  );
}

export default App;
