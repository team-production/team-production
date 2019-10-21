import React, { Component } from 'react'
import './index.scss'
import HomePage from '../homgPage/index'
import HtmlPage from '../htmlPage/index'
import JQueryPage from '../jQueryPage/index'
import JsPage from '../jsPage/index'
import ReactPage from '../reactPage/index'
import UlPage from '../uIPage/index'
import VuePage from '../vuePage/index'
import CssPage from '../cssPage/index'
import TypeScript from '../typeScript/index'
// 模板文件
import { Tabs, Button } from 'antd'
const { TabPane } = Tabs

const operations = <Button disabled>登录</Button>
export default class index extends Component {
  render() {
    return (
      <div className="wrap">
        <header className="wrap-header">
          <h1>知识仓库</h1>
        </header>
        {/*导航部分 */}
        <nav className="wrap-nav">
          <Tabs tabBarExtraContent={operations}>
            {/* <TabPane tab="首页" key="1">
              <TypeScript />
            </TabPane> */}
            {/* <TabPane tab="CSS" key="2">
              <CssPage />
            </TabPane> */}
            <TabPane tab="JS" key="3">
              <JsPage />
            </TabPane>
            <TabPane tab="jQuery" key="4">
              <JQueryPage />
            </TabPane>
            <TabPane tab="Vue" key="5">
              <VuePage />
            </TabPane>
            {/* <TabPane tab="Ul" key="6">
              <UlPage />
            </TabPane> */}
            <TabPane tab="React" key="7">
              <ReactPage />
            </TabPane>
            <TabPane tab="HTML" key="8">
              <HtmlPage />
            </TabPane>
          </Tabs>
        </nav>
        {/* 内容部分 */}
        <main className="wrap-main"></main>
      </div>
    )
  }
}
