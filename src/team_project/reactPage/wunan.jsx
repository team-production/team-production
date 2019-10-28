import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text1 = (
  <ul>
    <p style={{fontSize:"20px",fontWeight:"700",color:"red"}}>定义：</p> <br/>懒加载(Load On Demand)是一种独特而又强大的数据获取方法,它能够在用户滚动页面的时候自动获取更多的数据,而新得到的数据不会影响原有数据的显示,同时最大程度上减少服务器端的资源耗用。<br/>
    <p style={{fontSize:"20px",fontWeight:"700",color:"red"}}>原理：</p><br/>先加载一部分数据，当触发某个条件时利用异步(async)加载剩余的数据，新得到的数据不会影响原有数据的显示，同时最大幅度的减少服务器端资源耗用。<br/>
    <p style={{fontSize:"20px",fontWeight:"700",color:"red"}}>意义：</p><br/>懒加载的主要目的就是作为服务器前端的优化，减少请求次数或者延迟请求数。<br/>
    <p style={{fontSize:"20px",fontWeight:"700",color:"red"}}>实现方式：</p><br/>1.第一种是纯粹的延迟加载，使用setTimeOut和setInterval进行加载延迟。<br/>2.第二种是条件加载，符合某种条件，或是出发某些事件才开始异步加载。<br/>3.第三种是可视区加载，仅记载用户的可视区域，这个主要监控滚动条来实现，一般会距用户看到某些图片前的一段距离时开始进行记载，这样就可保证用户拉下时正好可以看到加载完毕后的图片或是内容。
  </ul>
);
const text2 = (
  <ul>
     <p style={{fontSize:"20px",fontWeight:"700",color:"red"}}>应用案例：</p><br/>考虑这样一个例子：海尔电器是一个非常大的组织机构，它下有1万多个组织单元。由于组织单元的复杂性，组织单元间也存在着上下级关系。现在的问题是：用户想加入海尔电器的某个组织单元，他该怎么选择到这个组织单元呢？
很容易想到的一个解决方法是：查询数据库，把海尔电器的所有组织单元放到一个下拉列表中，让用户选择即可。这样的确是解决问题了，但是，测试发现，浏览器在显示组织单元数据时就直接假死了。看来，这样做性能太差，可以不采纳。
另一个解决方法就是利用懒加载技术。由于组织单元间存在着上下级关系，那么组织单元的排列就可以当作一棵树来处理。在显示数据时只显示父节点，点击父节点时，就能显示父节点下的子节点。
用户要选择某个组织单元，只需点击该组织单元的父亲节点就能找到该组织单元。
可以看出，懒加载节省了系统响应时间，提升了系统性能，非常具有利用价值。
  </ul>
);
const text3 = (
  <ul>
   <p style={{fontSize:"20px",fontWeight:"700",color:"red"}}>方法：组件的懒加载的4种方法</p> <br/>

1、webpack+es6的import(this.props.children为回调函数);<br/>

2、webpack+es6的import纯粹的高阶组价<br/>

3、webpack+es6的import +async（高阶函数）<br/>

4、webpack+require.ensure (高阶组价)<br/>
  </ul>
);
export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{width: "1000px",margin: "auto",}}>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel style={{fontSize: "24px",fontWeight: "700"}} header="懒加载定义和原理" key="1">
            {text1}
          </Panel>
          <Panel style={{fontSize: "24px",fontWeight: "700"}} header="懒加载应用案例" key="2">
            {text2}
          </Panel>
          <Panel style={{fontSize: "24px",fontWeight: "700"}} header="懒加载方法" key="3">
            {text3}
          </Panel>
        </Collapse>
      </div>
    );
  }
}
