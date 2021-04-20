import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import '../22_src_Antd使用/node_modules/antd/dist/antd.css'
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class App extends Component {
  
  render() {
    return (
      <div>
        App...
      </div>
    )
  }
}