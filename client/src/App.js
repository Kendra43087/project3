import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/character.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Mom's Intuition</h1>
        </header>
       <p className="App-intro">
           Rare Childhood Disibalities </p>

        <div className="cardContainer">
        

       <Character 
         name="Hallerman" 
       />

       <Character 
         name="Apert Sydrome" 
       />

       <Character 
         name="Myelomeningocde" 
       />

       <Character 
         name="Bixler Sydrome" 
       />

       <Character 
         name="Rett Sydrome" 
       />

       <Character 
         name="Diprosopus" 
       />

       <Character 
         name="Ostegensis Imperfecta" 
       />

       <Character 
         name="Acute Flaccid Myelitis" 
       />

       <Character 
         name="Treaher Collins Syndrome" 
       />


       <Character 
         name="Juvenile Hungtingtons" 
       />

       <Character 
         name="Neourofiberomat-osis" 
       />

       <Character 
         name="Goldenher Syndrome" 
       />


      
       


        </div>
      </div>
   );
  }
}

export default App;
