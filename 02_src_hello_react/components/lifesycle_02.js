import React, { Component } from 'react';


class Count extends Component {

  constructor(props) {
    console.log('Count---constructor');
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('Count---componentWillMount');
  }
  //组件挂载后执行的Mount
  componentDidMount() {
    console.log('Count---componentDidMount');
  }

  //组件挂载前执行的Mount
  componentWillUnmount() {
    console.log('Count---componentWillUnmount');
  }

  add = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  // death = () => {
  //   console.log('Count---component');
  //   ReactDOM.unmountComponentAtNode(document.getElementById('test'))
  // }

  forceRefresh = ()=>{
    this.forceUpdate();
  }

  componentWillReceiveProps() {
    console.log('Count---componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('Count---shouldComponentUpdate');
    return true
  }

  componentWillUpdate(){
    console.log('Count---componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Count---componentDidUpdate');
  }

  render() {
    console.log('Count---render');
    const { count } = this.state
    return (
      <div id="test">
        <h2>当前求和: {count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.forceRefresh}>强制更新</button>
      </div>
    )
  }
}



export default Count;