import React, { Component } from 'react'
import './index.scss'
import HtmlPage from '../htmlPage/index'
import Home from '../home/index'
import JsPage from '../jsPage/index'
// import ReactPage from '../reactPage/index'
import VuePage from '../vuePage/index'
import ReactPage from '../reactPage/index'
// 模板文件
import { Tabs, Button } from 'antd'
const { TabPane } = Tabs

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      hash: window.location.hash.slice(1) || 'JS'
    }
  }

  // 切换页面
  togglePage = ({ target }) => {
    const { innerText } = target
    this.setState({
      hash: innerText
    })
    window.location.hash = innerText
  }

  // 退出登陆
  leaveUser = () => {
    window.localStorage.setItem('token', '')
    this.setState({
      token: ''
    })
    this.props.toggle('login')
  }
  render() {
    const operations = <Button onClick={this.leaveUser}>退出登录</Button>
    const { hash } = this.state
    return (
      <div className="wrap">
        <header className="wrap-header">
          <h1>知识仓库</h1>
        </header>
        {/*导航部分 */}
        <nav className="wrap-nav">
          <Tabs
            tabBarExtraContent={operations}
            onTabClick={(value, e) => this.togglePage(e)}
            activeKey={hash}
          >
            {/* 内容部分 */}

            <TabPane tab="home" key="home">
              <Home />
            </TabPane>
            <TabPane tab="JS" key="JS">
              <JsPage />
            </TabPane>
            <TabPane tab="Vue" key="Vue">
              <VuePage />
            </TabPane>
            <TabPane tab="React" key="React">
              <ReactPage />
            </TabPane>
            <TabPane tab="HTML" key="HTML">
              <HtmlPage />
            </TabPane>
            <TabPane tab="react" key="react">
              <ReactPage />
            </TabPane>
          </Tabs>
        </nav>
      </div>
    )
  }
}
