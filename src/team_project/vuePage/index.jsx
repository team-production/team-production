import React from 'react'

//antUI库
import { Collapse } from 'antd';
const { Panel } = Collapse;
//VUE
const text = (
  <ul style={{ paddingLeft: 24 }}>

	 <p style={{fontSize:'18px',fontWeight:"bold"}}>一、package.json的作用(了解)</p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、node_moudules 文件夹 -->放着我们项目的依赖</li>
		 <li>2、dependencies(依赖) devDependencies(开发依赖) 写代码的时候需要用，打包的时候不需要 npm install 其实就是走的依赖</li>
		 <li>3、scripts 脚本 npm run serve</li>
		 <li>4、name 项目名称, version:版本号</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>二、路由懒加载</p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、/* webpackChunkName: "about" */ 可以给懒加载模块起名</li>
		 <li>2、import() 表示懒加载，es6的语法 </li>
		 <li>3、路由懒加载的写法(跳转到当前路由才去加载组件)</li>
		 <li>4、路由重定向 使用redirect</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>三、局部组件引入流程</p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、用import 标签导入</li>
		 <li>2、在components里面注册 </li>
		 <li>3、用标签的形式使用</li>
		 <li>4、路由重定向 使用redirect</li>
	 </ul>
	 	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>四、 路由激活样式</p>
	 <ul style={{fontSize:'17px'}}>
		 <li>router-link-exact-active router-link-active router- link exact 属性 确切严格的匹配</li>
	 </ul>
	  	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>五、async await 异步的终极解决方案</p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、async 后面必须跟函数 表示函数路面有异步操作</li>
		 <li>2、await 后面通常跟promise(也可以跟普通值) 跟promise 表示promise的执-行结果 </li>
		 <ul style={{fontSize:'17px'}}>
			五.1 组件化的好处
			<li>1、可复用</li>
		 	<li>2、便于维护 </li>
		 	<li>3、可组合</li>	 	
	 </ul>
	 </ul>
	  	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 六、axios
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、axios.defaults.baseURL 抽离公共的请求路径</li>
		 <li>2、axios.defaults.baseURL 抽离公共的请求路径</li>
		 <li>3、axios.interceptors.request.use 请求拦截器
</li>
	 </ul>
	 	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 七、try  catch  异常捕获  不会影响后面代码执行
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>
			try{
  				// 要执行的代码
			}catch(err){
  			// console.log(err) 捕获到的异常
			}
			</li>
	 </ul>
	 	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 八、vue里面styled的属性
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、style 标签加scoped 表示样式只对当前组件生</li>
		 <li>2、lang 表示css使用的预编译语言 scss less stylus</li>
		<ul style={{fontSize:'17px'}}>
		八1、Promise.all = > axios.all
		 <li>1、用法：所有的promise成功之后才会走all里面的成功</li>
		 <li>2、好处：多个请求完成之后把数据集合到一起
		</li>
	 </ul>
	 </ul>
	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 九、vue取原生dom
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、通过this.$el</li>
		 <li>2、通过refs  （放在原生dom上取的就是dom，放在组件上取的就是组件）</li>
		 <li>3、设置值  ref = '自定义的值'</li>
		 <li>4、取值通过this.$refs.自定义的值</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十、单页面应用原理（hash histroy）
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、hash 改变的方法  hashchange  函数</li>
		 <li>2、histroy  histroy.pushState({},null,'/a')  改变url不刷新页面 改变的方法</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十一、路由跳转
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、router-link tag 属性 把a标签转化成其他标签
路由跳转的方式 router-link this.$router.push()
参数为params的跳转方式 1)直接拼接路径 '只能通过path</li>
		 <li>2、直接写params参数 只能通过name
写parmas跳转的时候路由必须接受参数通过:/
用/:id 表示不固定但是必须有 多个/:id/:name
this.$route.params
参数为query的跳转方式
 {/* :to="{name:'detail',query:{id:item.id}}" */}
 {/* :to="{path:'/detail',query:{id:item.id}}" */}
query取值 this.$router.query
既可以用name也可以用path
用query的时候路由不在需要任何处理</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十二、$router 和$route
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、$router 表示路由的实例 方法（push,go）</li>
		 <li>2、$route 表示的路由的信息  属性(params,query)</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十三、在template模板
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>在template里面只允许有一个在外层的元素</li>
		<ul>
			v-if 和v-show的区别
			 <li>v-show display:none 用来频繁切换</li>
		 	<li>v-if dom操作。隐藏的话dom是没有这个元素的</li>
		</ul>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十四、插槽 slot 
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、通过slot 可以往组件里面放东西 不写任何东西叫做默认插槽 ��</li>
		 <li>2、命名插槽 slot name="ry" 使用的是需要用template name对应的是template的#ry</li>
	 </ul>

	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十五、 防止事件冒泡到上级
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>在事件名后面加 .stop</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		十六、只在vue-cli里面支持下面的写法
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>vue 里面组件名字的写法 驼峰命名的可直接转成中划线写法
		MobileNav -> mobile-nav</li>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十七、缓存 keep-alive 组件
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、目的:减少请求，做缓存，节约性能</li>
		 <li>2、router-view 路由的视图
</li>
		 <li>3、路由元信息 meta:{} meta后面的对象可以放自定义属性 routers.js 下面的每个路由对象</li>
		 <li>4、$route.meta.自定义的属性名</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十八、vue流程
	 </p>
	 <ul style={{fontSize:'17px'}}>
		  项目的目录结构
		 <li>-mock 如果自己写模拟数据创建mock文件夹
			 -src
			-view 页面级组件
			-libs 工具类 util.isArray
			-componments 基础组件/公共组件
			-api 放ajax请求index.js
		</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十九、 搭建项目的页面 首页 列表 购物车 个人中心 详情页 配置导航路由
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、app.vue 配置router-link 配置导航</li>
		 <li>2、views 里面建页面组件 List.vue Car.vue Profile.vue Detail.vue 3) 配置路由 和 导航 router-link 等于 a标签 a href</li>
	 </ul>

	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十、首页
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、抽离导航变成独立组件 components(放基础/公共组件) 新建 Nav.vue 2） 引入本地css assets 文件夹里面 3）轮播图 components建Banner.vue</li>
		 <li>2、props 传值 子组件定义props 接收数据的是子组件 传递数据的是父组件</li>
		 <li>3、使用轮轮播图组件 vue-awesome-swiper
			-npm install vue-awesome-swiper --save
			-main.js</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十一、 axios 的使用流程 src/api/index.js
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、-npm install axios --save
			-index.js api/index.js 导出请求的方法</li>
		 <li>2、哪个组件需要数据就在哪个组件引入</li>
		 <li>3、在引入的组件里面进行调用
			 getBanner()  执行才会发送请求 </li>
		 <li>4、请求的写法 和async和await 效果一致</li>
	 </ul>

	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十二、vue ui 库vant的使用
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、下载 npm i vant -S</li>
		 <li>2、导入全部组件 main.js</li>
		 <li>3、import Vant from 'vant';
				import 'vant/lib/index.css';
				Vue.use(Vant);
		</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十三、滚动加载更多
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>页面滚动到底部的条件
scrollTop +clientHeight  >  scrollHeight  </li>
		 
	 </ul>
	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十四、 loadash的使用
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、npm install loadash 
			 2、main.js
			 3、import _ from 'loadash'</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十五、分享功能的实现
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、下载插件 npm install vue-social-share -S</li>
		 <li>2、main.js vue里使用第三方插件�通过Vue.use</li>
		 <li>3、import Share from 'vue-social-share'
Vue.use(Share)</li>
		 <li>4、使用share 组件 在组件中</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十六、vue项目打包
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、命令 npm run build</li>
		 <li>2、打包过后的项目只能在服务器访问</li>
		 <li>3、http-server的使用</li>
		 <li>4、npm install http-server -g在文件夹目录允许htt-server</li>
	 </ul>
  </ul>
  </ul>
);
//MOCK
const text2 = (
	<ul style={{ paddingLeft: 24 }}>
		<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 一、nodemon  自动重启
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、node  npm install nodemon -g和src同级建立mock（独立）文件夹(放在其他处也可以) mock(放mock数据) mock里面建app.js(服务器) banner.js（轮播图图片） list.json（商品列表</li>
		 <li>2、express 使用</li>
		 <li>3、npm install express 下载express</li>
		 <li>4、(vue-cli创建项目里面不用下，因为vue-cli是基于webpack的，webpack自带了express)app.js</li>
		 <li>5、创建express 服务器  let  express = require("express")
  		let app = express()//会自动创建一个服务器
  			app.listen(3000) 
		跨域解决方式 cors 跨域 跨域资源共享</li>
		<li>6、npm install cors 跨域的包
          const cors = require("cors")
		  app.use(cors())</li>
	 </ul>
	 	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二、分页接口逻辑
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、20条数据 -> 一次拿五条
			 前端 服务端 服务端 --> 返回数据->前端 			
			 前端 --> 请求数据 ->服务端g</li>
		 <li>2、axios.get('http://localhost:3000/banner') axios.get('www.baidu.com/banner')</li>
	 </ul>
	 	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 三、mock 接口 vue.config.js配置数据
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、跟目录下面建立vue.config.js</li>
		 <li>2、vue.config 配置数据 需要改动的时候重新启动 npm run serve</li>
	 </ul>
	</ul>	
)
// NPM
const text3 =(
	<ul style={{ paddingLeft: 24 }}>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 一、npm命令
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、npm init -y 一键式初始化</li>
		 <li>2、npm install   下载 npm install  jquery@2.0   npm i ->npm install的简写 -g global的缩写 全局</li>
		 <li>3、npm uninstall  卸载
-https://registry.npmjs.org/</li>
		 <li>4、切换淘宝源:npm set registry https://registry.npm.taobao.org/</li>
		 <li>5、npm cache clear --force  强制除缓存</li>
	 </ul>
	 	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二、nrm  管理npm用的（可选项）
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、下载nrm ： npm install nrm -g</li>
		 <li>2、nrm ls npm 仓库列表</li>
		 <li>3、测试仓库速度 nrm test</li>
		 <li>4、使用那个仓库 nrm use taobao/  等价于  </li>
	 </ul>
	</ul>
)
export default class Index extends React.Component{
	render(){
		return(
			<div style={{width:'1000px',margin:'auto'}}>
				<div style={{width:"160px",height:'40px',margin:'auto',fontSize:'22px' ,fontWeight:"bold",textAlign:"center"}}>vue知识库</div>
				<p style={{width:'230px',height:'40px',margin:'20px auto',fontSize:'18px' }}>欢迎来到vue笔记大全👏......</p>
			<Collapse bordered={false} defaultActiveKey={['1']}>
				    
    				<Panel style={{fontSize:'20px'}} header="VUE基础知识" key="1">
      						{text}
    				</Panel>
    				<Panel style={{fontSize:'20px'}} header="MOCK接口"  key="2">
      						{text2}
   				 	</Panel>
    				<Panel style={{fontSize:'20px'}} header="NPM 使用"  key="3">
      						{text3}
    				</Panel>
  			</Collapse>
			</div>
		)
	}
} 