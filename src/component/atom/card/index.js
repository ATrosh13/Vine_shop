import React, { Component } from 'react'
import './card.css';

export default class Catalog extends Component {
  render() {
    return (
    
      <div className="card">
      	 <div className="image">
		 <img src="img/VineBotle.jpg" alt="Изображение" title="Изображение" />
		 </div>
            <h1>Chardonnay Sauvignon</h1>
			<p>Year: 1999</p>
       <button className="button_card">BUY</button>
      </div>
    
    )
  }
}
