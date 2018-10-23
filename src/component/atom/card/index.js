import React, { Component } from 'react'
import './card.css';
import { data } from '../../../data';

export default class Catalog extends Component {
  render() {
    return (
    
      <div className="card">
      	 <div className="image">
		 <img src={this.props.data.picture} alt="Изображение" title="Изображение" />
		 </div>
     <h1>Chardonnay Sauvignon</h1>
     {/* <h1>{this.props.data.name}</h1> */}
     <h2>{this.props.data.price}</h2>
      <p>Year: {this.props.data.year}</p>
       <button className="button_card">BUY</button>
      </div>
    
    )
  }
}
