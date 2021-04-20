import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css'
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
        <Button type="primary">按钮1</Button>
        <Button >按钮2</Button>
        <Button type="link">按钮3</Button>
        <WechatOutlined />
        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
        <DatePicker onChange={onChange} />
        <RangePicker />
      </div>
    )
  }
}