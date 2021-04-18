import React, { Component } from 'react';

/*
实现每秒刷新
*/
class Tick extends Component {

  //添加一个class构造函数
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //挂载
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //卸载
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //Clock每秒调用这个方法，更新setState
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      // setInterval(1000);
    )
  }

}


export default Tick;