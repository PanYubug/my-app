import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class Search extends Component {

  search = async () => {
    //获取用户的输入
    const { keyWordElement: { value: keyWord } } = this
    //发送请求前通知List更新状态
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })

    //发送网络请求---使用axios发送
    /* axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        //请求成功后通知App更新状态
        PubSub.publish('atguigu',{ isLoading: false, users: response.data.items })
      },
      error => {
        PubSub.publish('atguigu',{ isLoading: false, err: error.message })
      }
    ) */
    //发送网络请求---使用fetch请求（未优化）
    /* fetch(`/api1/search/users?q=${keyWord}`).then(
      response=>{
        console.log('联系服务器成功了');
        return response.json()
      },
      error=>{
        console.log('联系服务器失败了', error);
        return new Promise(()=>{})
      }
    ).then(
      response=>{console.log('获取数据成功了', response);},
      error=>{console.log('获取数据失败了', error);}
    ) */
    //发送网络请求---使用fetch请求（优化）
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      console.log(data);
      PubSub.publish('atguigu', { isLoading: false, users: data.items })
    } catch (error) {
      console.log('请求出错', error);
      PubSub.publish('atguigu', { isLoading: false, err: error.message })
    }


  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
