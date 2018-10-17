import React, { Component } from 'react';

import './web.css';
import Card from './card';
import axios from 'axios';
import { Link } from 'react-router-dom';




class Web extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDef: false,
      definition: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
   let that = this;
    let condition = {
        name: event.target.name
    }
    axios.post('/api/medical', condition).then(res => {
      console.log(res.data.data, "this is the def")
      that.setState({
        showDef: true,
        definition: res.data.data
      })
    });
  }

  render() {
    return (
      <div className="App" >



        <header>
          <h1 className="App-title">Mom's Intuition</h1>
        </header>




       <p className="App-intro">
         Rare Disibalities </p>

        <div className="defParent">
        {
          this.state.showDef ?
          <div className="defContainer">{this.state.definition}</div> :
          ""
        }
       

        </div>
           
      
        <div className="cardContainer">
      


        <button name="Hallerman Streiff Syndrome" onClick={this.handleClick} className="button button2">Hallerman Streiff Syndrome</button>
        <button name="Apert Syndrome" onClick={this.handleClick} className="button button2">Apert Syndrome</button>
        <button name="Myelomeningocele" onClick={this.handleClick} className="button button2">Myelomeningocele</button>
        <button name="n" onClick={this.handleClick} className="button button2">Rett Syndrome</button>
        <button name="Diprosopus" onClick={this.handleClick} className="button button2">Diprosopus</button>
        <button name="Osteogenesis-imperfecta" onClick={this.handleClick} className="button button2">Ostegenesis Imperfecta</button>
        <button name="Acute Flaccid Myelitis" onClick={this.handleClick} className="button button2">Acute Flaccid Myelitis</button>
        <button name="Treacher Collins Syndrome" onClick={this.handleClick} className="button button2">Treacher Collins Syndrome</button>
        
        <button name="Juvenile Huntingtons" onClick={this.handleClick} className="button button2">Juvenile Huntingtons</button>
        <button name="Bixler Syndrome" onClick={this.handleClick} className="button button2">Bixler Syndrome</button>
        <button name="Neurofiberematosis" onClick={this.handleClick} className="button button2">Neurofiberematosis</button>
        <button name="Golden Her Syndrome Acute Flaccid Myelitis" onClick={this.handleClick} className="button button2">Golden Her Syndrome Acute Flaccid Myelitis</button>
        <button name="Candle Syndrome" onClick={this.handleClick} className="button button2">Candle Syndrome</button>
        <button name="Nager Syndrome" onClick={this.handleClick} className="button button2">Nager Syndrome</button>
        <button name="Nemaline Myopathy" onClick={this.handleClick} className="button button2">Nemaline Myopathy</button>
        <button name="Pfeiffer Syndrome" onClick={this.handleClick} className="button button2">Pfeiffer Syndrome</button>




      
       
      <Link to="/blog"><button>Blog</button></Link>
   

      
      <img src="./images/background.jpg" alt="" width="100%" height="auto" />

       </div>
       </div>
       

     
   );
  }
}





export default Web;

