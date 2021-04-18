import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault() //阻止表单提交
    const { username, password } = this.state
    // const { username, password } = this
    // alert(`你输入的用户名是:${username.value}, 你输入的密码是:${password.value}`)
    alert(`你输入的用户名是:${username}, 你输入的密码是:${password}`)
  }

  saveUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  savePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  saveFormData = (dataType) => {
    return (event) => {
      this.setState({ [dataType]: event.target.value })
    }
  }

  saveFormData1 = (dataType, event) => {
    this.setState({ [dataType]: event.target.value })
  }

  render() {
    return (
      <div>
        <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
          用户名1：<input ref={c => this.username = c} type="text" name="username" />
          密码1：<input ref={c => this.password = c} type="text" name="password" />
          <button>登录1</button>
        </form>

        <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
          用户名2：<input onChange={this.saveUsername} type="text" name="username" />
          密码2：<input onChange={this.savePassword} type="text" name="password" />
          <button>登录2</button>
        </form>

        <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
          用户名3：<input onChange={this.saveFormData('username')} type="text" name="username" />
          密码3：<input onChange={this.saveFormData('password')} type="text" name="password" />
          <button>登录3</button>
        </form>

        <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
          用户名4：<input onChange={(event) => { this.saveFormData1('username', event) }} type="text" name="username" />
          密码4：<input onChange={(event) => { this.saveFormData1('password', event) }} type="text" name="password" />
          <button>登录4</button>
        </form>
      </div>
    )
  }
}

export default Login;