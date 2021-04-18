import React, { Component } from 'react';
import Person from './Person';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHot: false,
      wind: '微风',
    };
    this.handlerBtnClick = this.handlerBtnClick.bind(this);

  }

  handlerBtnClick() {
    const { isHot } = this.state.isHot;
    this.setState({ isHot: !isHot })
  }



  render() {
    console.log(this);
    const p = { name: '老刘', age: 19, sex: '女' };

    return (
      <React.Fragment>
        <button onClick={this.handlerBtnClick}>
          今天天气很{this.state.isHot ? '炎热' : '凉爽'}, {this.state.wind}
        </button>
        <Person />
        <Person name="tom" sex="女" age={18} />
        <Person {...p} speak={speak} />
      </React.Fragment>
    )
  }
}

function speak() {
  console.log('我说话了')
}

export default Weather;