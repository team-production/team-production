import React, { Component } from 'react'
import Layout from './layout/index' // 内容页
import Register from './login/register/index' // 注册页
import Login from './login/login/index' //登录页
// 根标签
export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      hash: window.location.hash.slice(1) || 'register',
      token: window.localStorage.getItem('token') || '' //是否可以进入home页
    }
  }
  // 切换登陆注册页
  toggle = (hash, data) => {
    console.log(data)
    if (data == 'ok') {
      // 设置权限进入首页
      this.setState({
        token: 'ok'
      })
    }
    this.setState({
      hash
    })
    window.location.hash = hash
  }

  
  render() {
    let Dom = ''
    switch (this.state.hash) {
      case 'register':
        Dom = <Register toggle={this.toggle} />
        break
      case 'login':
        Dom = <Login toggle={this.toggle} />
        break
      case 'home':
        if (this.state.token === 'ok') {
          Dom = <Layout toggle={this.toggle} />
        } else {
          alert('对不起您还未登录！~')
          this.toggle('login')
        }
        break
      default:
        Dom = <Register toggle={this.toggle} />
    }
    return <div>{Dom}</div>
  }
}
