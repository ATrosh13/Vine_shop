import React, { Component } from 'react'
import { data } from '../../../data';

import Paybox from '../../atom/payBox';
import Card from '../../atom/card';
import './catalog.css';

export default class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        {data.map(item => <Card key={item._id} data={item} />)}
        <Paybox />
      </div>
    )
  }
}
