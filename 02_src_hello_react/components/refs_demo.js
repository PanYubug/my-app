import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Demo extends Component {

  myRef = createRef()

  state = { isHot: true }

  showData = () => {
    console.log(this);
    // const { input1 } = this.refs
    // alert(input1.value)
    const { input1 } = this
    alert(input1.value)
  }

  showData2 = () => {
    console.log(this);
    // const { input2 } = this.refs
    // alert(input2.value)
    const { input2 } = this
    alert(input2.value)
  }

  changeWeather = () => {
    const { isHot } = this.state
    this.setState({ isHot: !isHot })
  }

  saveInput = (c) => {
    this.input1 = c;
    console.log('@1', c);
  }

  showData3 = ()=>{
    alert(this.myRef.current.value);
  }

  render() {
    const {isHot} = this.state
    return (
      <div>
        <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
        {/* <input ref={(c) => { this.input1 = c; console.log('@1', c) }} type="text" placeholder="点击按钮提示数据" />&nbsp; */}
        <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据" />&nbsp;
        <button onClick={this.showData}>点我提示左侧数据</button>&nbsp;
        {/* <input ref={c => this.input2 = c} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" /> */}
        <input ref={this.myRef} onBlur={this.showData3} type="text"  placeholder="失去焦点提示数据" />
        <button onClick={this.changeWeather}>点我切换天气</button>
      </div>
    )
  }
}

export default Demo;