import React, { Component } from 'react'

import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="start-page">
        <div>
          <h2>Discover vine</h2>
          <p>luxury wine at affordable prices</p>
        </div>
        <button className="btn-goto-catalog" onClick={()=>this.props.openCatalog()}>catalog</button>
      </div>
    )
  }
}
