import React, { Component } from 'react';
import Count from './mytest/lifesycle_02';

class Father extends Component {

  death = () => {
    console.log('father' + this);
  }

  render() {
    return (
      <div>
        <Count />
      </div>
    )
  }
}
export default Father;