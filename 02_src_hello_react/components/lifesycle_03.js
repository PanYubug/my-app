import React, { Component } from 'react';

class A extends Component{
  state = {
    carName: '奔驰'
  }

  changeCar = ()=>{
    this.setState({carName:'奥拓'})
  }

  render(){
    return(
      <div>
        <div>我是A组件</div>
        <button onClick={this.changeCar}>换车</button>
        <B carName={this.state.carName}/>
      </div>
    )
  }
}


class B extends Component {
  

  componentWillMount() {
    console.log('B---componentWillMount');
  }
  //组件挂载后执行的Mount
  componentDidMount() {
    console.log('B---componentDidMount');
  }

  //组件挂载前执行的Mount
  componentWillUnmount() {
    console.log('B---componentWillUnmount');
  }

  componentWillReceiveProps() {
    console.log('B---componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('B---shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log('B---componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('B---componentDidUpdate');
  }

  render() {
    console.log('B---render');
    return (
      <div>
        我是B组件，收到的车是：{this.props.carName}
      </div>
    )
  }
}

export default A;