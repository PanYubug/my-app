import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props){
    super(props);
  }

  // 对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func,
  }

  // 指定默认标签属性值
  static defaultProps = {
    name: '王五',
    sex: '男',
    age: 22
  }

  render() {
    const { name, sex, age } = this.props;
    return (<div>
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    </div>)
  }
}





export default Person;