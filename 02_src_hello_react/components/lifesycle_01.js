import React, { Component } from 'react';

class Life extends Component {

  state = {
    opacity: 0.1
  }

  componentDidMount() {
    setInterval(() => {
      let { opacity } = this.state
      opacity -= 0.1
      if (opacity <= 0) {
        opacity = 1
      }
      this.setState({ opacity })
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // death = ()=>{
  //   React.ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // }

  action = () => {
    this.timer = setInterval(() => {
      let { opacity } = this.state
      opacity -= 0.1
      if (opacity <= 0) {
        opacity = 1
      }
      this.setState({ opacity })
    }, 200);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办？</h2>
        {/* <button onClick={this.death}>不活了</button> */}
      </div>
    )
  }
}



export default Life;