import React, { Component } from 'react';

import Home from '../../component/block/home';
import Catalog from '../../component/block/catalog'
import './App.css';

class App extends Component {
  state = {
    catalog: false
  }
  
  openCatalog = () => this.setState({ catalog: !this.state.catalog });

  render() {
    return (
      <div className="App">
        <div className="left-image">
        </div>
        <div className="app-container">
          {!this.state.catalog ? <Home openCatalog={this.openCatalog} /> : <Catalog /> }
        </div>
      </div>
    );
  }
}

export default App;
