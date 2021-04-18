import React, { Component } from 'react';

class MenuList extends Component {

  constructor(props) {
    console.log('Count---constructor');
    super(props)
    this.state = {
      count: 0
    }
  }

  add = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  // death = () => {
  //   console.log('Count---component');
  //   ReactDOM.unmountComponentAtNode(document.getElementById('test'))
  // }

  forceRefresh = () => {
    this.forceUpdate();
  }

  static getDerivedStateFromProps(props) {
    console.log('Count---getDerivedStateFromProps', props);
    return null 
  }

  getSnapshotBeforeUpdate() {
    console.log('Count---getSnapshotBeforeUpdate');
    return 'snapshotFunction'
  }

  //组件挂载后执行的Mount
  componentDidMount() {
    console.log('Count---componentDidMount');
  }

  //组件挂载前执行的Mount
  componentWillUnmount() {
    console.log('Count---componentWillUnmount');
  }

  shouldComponentUpdate() {
    console.log('Count---shouldComponentUpdate');
    return true
  }

  componentDidUpdate(preProps, preState, snapshotValue) {
    console.log('Count---componentDidUpdate', preProps, preState, snapshotValue);
  }

  render() {
    console.log('Count---render');
    return (
      <div id="list">
        <div className="news">新闻6</div>
        <div className="news">新闻5</div>
        <div className="news">新闻4</div>
        <div className="news">新闻3</div>
        <div className="news">新闻2</div>
        <div className="news">新闻1</div>
      </div>
    )
  }
}



export default MenuList;