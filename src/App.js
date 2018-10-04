import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/character.js';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <body>
        <Character
        shuffleCharacterCard={this.shuffleCharacterCard}image="/images/images(1).jpg" name="Nerd"/>

        </body>
      </div>
    );
  }
}

export default App;
