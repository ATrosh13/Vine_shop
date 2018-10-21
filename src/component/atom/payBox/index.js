import React, { Component } from 'react'

import './payBox.css'

export default class Paybox extends Component {
  render() {
    return (
      <div className="pay-box">
        <div>bottles: 0</div>
        <div>total: 0$</div>
        <button className="button_payBox">pay</button>
      </div>
    )
  }
}
