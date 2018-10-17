import React, { Component } from 'react';
import './card.css';
//import Card from '@material-ui/core/Card';
//import { CardContent } from '@material-ui/core';

class Card extends Component {
    render() {
      return (
        <div className="cardContainer">
        
             <h1 className="App-title">{ this.props.name }</h1>
             <p>{this.props.image}</p>
         
        </div>
        
        
      );
    }
  }
  
  export default Card;