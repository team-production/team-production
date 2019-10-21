import React, { Component } from 'react'

//antUI库
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = (
	<ul style={{ paddingLeft: 24 }}>
	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 一、创建 react 项目的 2 种方式
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、npx create-react-app '项目名称'</li>
		 <li>2、全局安装 creat-react-app</li>
		 <li>3、npm install create-react-app -g</li>
		 <li>4、create-react-app '项目名称'</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二、react 主要包含 2 个包 react  react-dom
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、document.createTextNode() 创建文本节点</li>
		 <li>2、jsx 语法 默认会使用大写 React 这个变量 � 因为 jsx 语法会自动调用 React.creatElenment 这个方法</li>
		 <li>3、用对象来描述元素叫做虚拟 dom creatElement 方法返回的是一个 react 元素/虚拟 dom(对象)</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 三、jsx 语法以及 jsx 写法特点
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、jsx js + xml(html) jsx 写 js 使用{} 表示 html标签</li>
		 <li>2、class => className class 关键字</li>
		 <li>3、label for => htmlFor</li>
		 <li>4、style => 对象形式</li>
		 <ul>
			 style 写法示例 第一个大括号 表示js 第二个大括号�表示对象
			 <li>1、innerHtml => dangerouslySetInnerHTML v-html xss 攻击 可以信赖的内容</li>
			 <li>2、{} 取值放 js 代码 必须要有返回值</li>
			 <li>3、事件 事件名 on 大写开头的名字 后面跟的是方法 驼峰命名</li>
			 <li>4、jsx语法里面写注释只能采用 {}</li>
			 <li>5、jsx元素只能有一个根元素，当不想有父元素生成的时候，可以用空标签进行包裹</li>
			 <li>6、react render方法可以渲染数组</li>
		 </ul>
	 </ul>

	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 四、传承的 dom 事件操作 
	 </p>
	 <ul style={{fontSize:'17px'}}>
		  <li>1、优点：直观 ，书写习惯，渲染快，利于 SEO</li>
		 <li>2、缺点：可复用性差 扩展困难 ，维护成本高，耦合度高
</li>
		 <li>3、适用于： 传统的静态网站，宣传页。参与开发人员少。</li>
		 
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 五、组件(模块)化开发
	 </p>
	 <ul style={{fontSize:'17px'}}>
		<li>1、优点： 复用性强，高内聚低耦合，命名空间，便于扩展和优化，维护方便，易于阅读</li>
		 <li>2、缺点：初期开发速度慢，对开发人员的逻辑能力要求高，需要借助自动化工具加工(node.js、webpack、babel),不利于 SEO。</li>
		 <li>4、适用于：团队开发，应用和程序项目，中大型项目。</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 六、react 的核心是组件
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>组件的设计目的是提高代码的可复用率降低了测试难度和代码复杂度</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 七、安装 cnpm 步骤
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <p>npm 下的淘宝镜像</p>
		 <li>1、 npm config set registry https://registry.npm taobao.org</li>
		 <li>2、npm config get registry
</li>
		 <li>3、npm install -g cnpm --registry=https://registry.npm.taobao.org</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 八、脚手架安装
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <p>创建项目</p>
		 <li>1、全局安装：npm install -g create-react-app</li>
		 <li>2、初始项目：create-react-app 项目名称: reactapp201909</li>
		 <li>3、启动项目：npm start</li>
		 <li>4、npm run eject:重新生成依赖和配置文件</li>
		 <li>5*npm run start :运行本地开发环境 *npm run build :打包项目 *npm run test：运行测试环境</li>
		 <li>6、npm run eject: - 重新生成依赖和配置文件 - 本地项目里的依赖和全局依赖包版本不一致导致的 bug,可以使用此命令解决。</li>
		<li>7、注意： 如果项目初始化的时候就是在 git 仓库里的，那么我们在使用此命令的时候会失败
控制台会提示我们应该先存储代码到本地 git 仓库</li>
        <li>8、解决办法：要么删掉 git 本地仓库，要么提交 git 仓库，才能正常使用此命令</li>
		<li>9、说明:
- 使用脚手架初识的项目，默认是隐藏配置文件和一些依赖的，其目的是为了减少空间占用，
  让项目结构更简单，但是有时候我们需要在配置文件里修改，那么就使用 eject 命令</li>
	 </ul>
	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 九、引入步骤
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、引入 react 依赖 包</li>
		 <li>2、创建无状态组件</li>
		 <li>3、在 react 中，所有的 dom 元素都是 js 生成的虚拟 dom,在 js 中 class 是保留关键字，所以我们在使用如 class 类型的时候需要遵守 react 定义的 className。</li>
		 <li>4、除了 class 类名，还有 label 标签上的 for 属性，需要用 forHtml 表示。</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十、在 react 中标签的嵌套严格遵照 w3c 标准，比如：p 标签不可以嵌套 div 或者其他块级元素
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、props:在 react 里叫属性，父组件传递给子组件上所有的属性都会在 props 里那到</li>
		 <li>2、 props 类型是对象</li>
		 <li>3、在 props 里默认是没有 children 的，只有当该组件被调用的时候且插入了一些子组件的时候，才会在 props 里有一个 children.它的类型是数组</li>
		 <li>4、 props.children：类型是数组，如果单纯的调用它，叫做隐式渲染</li>
		 <li>5、我们可以使用使用 react 提供的方法对 children 里的每一项做处理，这样的使用我们叫做显示渲染
</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十一、顶级 API 概念：凡是挂载在 React 和 ReactDOM 下面的 api 都是顶级的
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、比如：createElement、cloneElement、Children</li>
		 <li>2、在 react 发展中.往往有三个 api 是配合使用的.它们就是： - React.Children + React.cloneElement + props.Children - 顶级 API 概念是指可以在全局可以使用的方法 ###顶级 api:React.Children 它的作用是处理组件里的 children 的，它下面有很多方法，我们常用的就是 map 遍历</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十二、顶级 api:React.cloneElement 
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>它的作用是克隆组件里 children 的每一项子元素，并返回一个新的 react 元素，该方法有三个参数和 createElement 几乎一致：1.元素 2.属性 3.内容或者子元素</li>
	 </ul>
	<p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十三、开发步骤
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、纯粹的静态页面</li>
		 <li>2、结构布局:
   			2.1 头部：logo、
		</li>
		 <li>3、接口封装使用 ajax</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十四、class 组件：
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、 定义：容器组件、功能组件
  详解：class 关键字声明、组件名称、extends 继承谁、React.Component 基础类</li>
		 <li>2、 说明：
  在 class 里的继承，必须是 class，只有 class 才能继承 class</li>
		 <li>3、在 class 组件中，dom 元素必须是在 render 方法中的，和无状态组件有直接区别</li>
		 <li>4、render:渲染
   
  //一个函数执行之后想要获取它内部的东西必须运用 进行返回</li>
		 <li>5、React.Fragment 是一个占位组件，作用是:在 react 定义中，所有组件都必须在一个根组件中，在我们不想拥有多层父级的时候，使用 React.Fragment 做占位符既可以解决根组件的问题，又保证页面上不会出现多余的 dom 元素。</li>
		 <li>6、React.Fragment 不会生成任何 dom 元素，并且有根容器的特性</li>
		 <li>7、注意：在 dom 元素内的{} 不是单纯意思的对象，它表示 js 表达式，及 js 执行环境，
    只有在 dom 内写注释，或者运行 js 的时候才需要用到{}
</li>
		 <li>8、自定义属性：
    我们在 dom 元素上自定义的属性，必须是全小写，只有 react 内置的如 className 是驼峰的以及 forHtml</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十五、React 组件三种写法：
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、funcion 无状态组件，只接受一个 propsli></li>
		 <li>2、class es6 的写法，继承 React.Coponent
        </li>
		 <li>3、createclass 了解，最后一版本 15.5.0 新版里被废弃</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十六、组件中的 API
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、定义:组件中的 Api</li>
		 <li>2、 props:是 react 组件的输入，它们是从父组件向下传递给子组件的数据，并且子组件无法修改，
    就像父亲遗传给儿子的基因，儿子无法修改的属性。</li>
		 <li>3、 props。children：是一个集合，它储存的是在标签中传入的子元素，概念就像是 vue 中的插槽。
    在无状态组件中可以直接 props.children 只用，在 props 中加 props.children</li>
	
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十七、顶级 API
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、 定义：凡是挂载在全局对象 React 下面的方法或属性都叫顶级 Api</li>
		 <li>2、React.createElement:创建虚拟 dom,接收三个参数：('html 原生标签','属性','内容或者子组件');</li>
		 <li>3、 React.Children:提供了用于处理 this.props.children 不透明数据结构的使用方法，详见

- 默认一般我们使用 map 方法，接收两个参数，(props.children,callback(child,index))
</li>
		 <li>4、另外还有 toArray(children):将 children 这个复杂的数据结构以数组的方式扁平展开并返回,
  并为每个子节点分配一个 key</li>
		 <li>5、React.cloneElement:克隆 React 元素 新的元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留</li>
		 <li>6、 针对于浅层合并，我们在处理新增属性的时候，要在子元素属性上用深合并
- 语法:React.cloneElement('element',,text|children)</li>
        <li>7、React.Frament:React 中的一个常见模式是一个组件返回多个元素。Fragment 允许你将子列表分组，
   而无需向 DOM 添加额为节点</li>

	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十八、class Header:派生类
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>
 {/* constructor 构造函数，是我们 class 组件声明周期的初始函数 // { - super*/} //在  中必须是函数调用，并且一定是在构造函数的最顶层使用 // 没写 前报错 - 什么时候使用 super 呢，当前类是作为子类，继承了其他类的时候，必须在 constructor 里用 super 进行实例化，只有这样，才能拥有子类自己的 this 指向
 //指向 header
  </li>
		 <li>2、 this.props:它是 class 组件的属性，区别于无状态组件多了一个 this,因为 class 组件在被使用的时候会被实例化也就是 new，因此在用它内部的属性或者方法的时候都需要用 this 去点出来。</li>
		 <li>3、构造函数，是我们class组件声明周期的初始函数</li>
		 <li>4、super在constructor中必须是函数调用，并且一定是在构造函数的最顶层使用</li>
		 <li>5、什么时候使用super呢，当前类是作为子类，继承了其他类的时候，必须在constructor里用super进行实例化，只有这样，才能拥有子类自己的this指向</li>
		 <li>
			 6、 this.props:它是class组件的属性，区别于无状态组件多了一个this,因为class组件在被使用的时候会被实例化也就是new，因此在用它内部的属性或者方法的时候都需要用this去点出来。

		 </li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十九、jsx
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、在 class 类中表示构造函数 ，在 react 组件中是
- 渲染函数 ，在生命周期里挂着和更新阶段有它
</li>
		 <li>2、 jsx 是一种看上去很像 html 标签的语法，但是它的底层还是 js,react 会将 jsx 语法转化为 React.createElement()去执行，所以 jsx 被称做 React.createElement 的语法糖。
</li>
		 <li>3、在虚拟 dom 中使用 js 的变量或者函数之类都需要放在一个 js 表达式{}，理解为 js 需要执行的环境。</li>
		 <li>4、表达式{}，理解为 js 需要执行的环境。
- </li>
		 <li>5、 jsx 是：

- 基于 ECMAScript 的一种新特性
- 一种定义带属性树结构的语法
  jsx 不是：
- xml 或者 HTML
- 一种限制
</li>
		<li>6、非 DOM 属性介绍 —— 为什么有非 DOM 属性
非 DOM 属性： dangerouslySetInnerHTML、ref、key</li>
		<li>7、dangerouslySetInnerHTML:在 JS 中直接插入 HTML 代码
ref：父组件引用子组件
key:提高渲染性能
</li>
		<ul>
			jsx 定义
			<li>JSX 第一个 javascript 语法扩展。它类似于模板语言，但它具有 javascript 的全部能力。JSX 最终会被编译成 React.createElement()函数调用，返回称为'React 元素'的普通 javascript 对象，所以 jsx 被称为是 createElement 的语法糖。</li>
			<li>使用驼峰式命名来定义原生属性的名称，而不使用 HTML 属性名称的命名约定。例如，HTML 的 tabindex 属性变成了 jsx 的 tabIndex。而 class 属性则变成为 className，这是因为 class 是 javascript 中的保留字，还是 label 的 for 属性用 htmlFor,因为 for 是保留字，自定义属性必须小写</li>
		</ul>

	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十、防止 css 样式全局渲染
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、react 安装 sass：
cnpm i -D sass-loader</li>
		 <li>2、cnpm i -D node-sass</li>
		 <li>3、使用：index.scss
前端里 scss 和 less 统称：css 预处理器</li>
		 <li>4、使用 Ang DesignUI 插件 使用安装命令：cnpm install antd --save</li>
		 <li>5、然后在全局的 index.js 文件夹 引入：</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十一、 项目结构
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、分布式项目结构：将模块的样式和脚本全部放在一个文件夹</li>
		 <li>2、集中式项目结构：将所以资源以类型分类放不同的文件夹里</li>
		 <ul>
			21.1 高阶组件
		 <li>3、高阶组件：是参数为组件，返回值为新组件的函数。</li>
		 <li>4、定义：高阶组件(HOC)是 React 中用于复用组件逻辑的一种高级技巧它不是 api,它是一种模式，高阶组件又叫 HOC</li>
		 <li>5、语法：一个函数接受一个组价，并返回一个 class 组件
  使用：函数调用传入一个组件</li>
		 </ul>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十二、 staState
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、1.配置引用文件路径：在项目一级目录里创建 jsconfig.json 写入：</li>
		 <li>2、使用都时候,可以用绝对路径使用，src 下的路径都可以用绝对路径 3.配置本地开发跨域请求：</li>
		 <li>3、在 package.json 文件里写入：“proxy"</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十三、在 react 解决跨域问题；
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li> - 4.1 在 package.json 配置
    - 4.2 在 webpackServer.config 配置
    - 4.3 使用 jsonp 模块解决跨域
    - 4.4 使用 node.js 做中间服务层解决跨域</li>
	    <ul>
			state 状态：
		 <li>1、定义：组件自由的状态，用来存数据的，它可以被组件自己修改</li>
		 <li>2、修改 state 使用 this.setState 方法，该方法接受一个对象，setState 会在内部将新的值和 state 旧的值进行合并</li>
		 <li>3、state 一旦被修改就会触发组件更新阶段</li>
		 </ul>
		 <ul>
			 props 属性：
			 <li>1、定义：父组件传递给子组件的数据就叫属性</li>
			 <li>2、props 只能由父组件去修改，子组件是无法修改父级传递进来的属性</li>
			 <li>3、props 更新后也会触发子组件的更新阶段</li>
		 </ul>
		 <ul>
			 state 和 props 对比：
			 <li>1、 相同点：都是存数据|值的，值被修改时都会触发组件更新</li>
			 <li>2、不同点：
2.1：props:父级传递过来的数据，只能由父级修改，子组件不能修改
2.2：state:是组件自身的状态，自己可以修改。</li>
		 </ul>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十四、生命周期的三个阶段：
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、挂载阶段：constructor【初始挂载】、render【渲染呈现】、componentDidMount【挂载完成】</li>
		 <li>2、、更新阶段：render【渲染】、componentDidUpdate【更新完成】</li>
		 <li>3、卸载阶段：componentWillUnmount【准备卸载】</li>
		 <li>4、速记方法：component【组件】、Did【完成】、Will【准备】
Mount【挂载】、update【更新】、Unmount【卸载】</li>
		 <li>5、触发更新阶段有哪些途径：props 更新、state 修改、forceUpdate</li>
	 </ul>

	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十五、控制元素加载与销毁
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、直接控制元素的加载与销毁，相当于 vue 中的 v-if
</li>
		 <li>2、在 react 中：布尔值，空字符串，null，undefined 统统的渲染成空内容，都相当于空字符串</li>
		 <ul>
			 条件渲染的基础
		 <li>3、三目写法 和 的对比，三目还是 if 的执行逻辑.及只要有一个条件成立，则后面的不再判断
  缺点：三目的语法不利于阅读，代码过长，还必须有一个没用的 else
  2. 在代码阅读起来直观，但是，每一行都会进行比较，造成了不必要的</li>
		 <li>4. 在代码阅读起来直观，但是，每一行都会进行比较，造成了不必要的浪费</li>
		  </ul>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十六、错误边界
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、定义：使用私有的勾子函数，捕获子组件的错误，并且优雅的使用备用 UI 来代替错误提示</li>
		 <li>2、不能捕获的错误有： 1.接口的错误 2.事件里的错误</li>
		 <li>3、使用：在本地开发环境中，还是会有错误提示的，但是打包代码上线后，</li>
		 <li>4、该方法在子组件发生错误的时候会触发属于不常用的生命周期</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十七、默认属性以及属性的验证
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、class 里的 static 关键字，给 class 添加一个私有的属性或方法，该添加的属性或者方法，只能通过 class 类名点出来,而实力化后的对象上则没有这个私有属性或者方法</li>
		 <li>2、两种方式取其中一种即可，如果都存在的活，</li>
		 <li>3、设置默认值 defaultProps:是 class 组件的特有属性，它是用来给组件设置默认属性的，通常情况写是为了防止由于 props 丢失或者空值情况下产生的错误</li>
		 <li>4、当父组件传入了属性，那么优先使用父级传入的属性</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十八、列表 & Key
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、jsx：虚拟 dom，底层是 js，专业名词：虚拟 dom 树，在 js 里表示形式：</li>
		 <li>2、 key: 为的是给 diff 算法进行优化，降低 js 执行次数，优化渲染 key 也必须在数组上下文环境中的兄弟元素上添加，并且每一个 key 都是唯一的【不能重复】</li>
		 <li>3、key:在循环体或者数组环境中，万不得以时使用 index【下标】一般在项目开发中，我们使用 id</li>
		 <li>4、用 key 值的时候先用 item 使用 id</li>
		 <li>5、用 index 不好处：没有优化，消耗性能，因为会重新遍厉数组</li>
		 <li>6、当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key</li>
		 <li>7、diff 算法:计算虚拟算法:其执行原理是：同级对比，层层匹配， 发现不一致是时直接用新的替换旧的</li>
	 </ul>
	 <p></p>
	 <p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二十九、ref
	 </p>
	 <ul style={{fontSize:'17px'}}>
		 <li>1、定义：React 支持一个特殊的、可以附加到任何组件上的 ref 属性，可以直接访问 DOM 元素或组件实例</li>
		 <ul>
			 forwardRef 的使用:
		 <li>2、 将父组件中的 ref 对象传递给子组件，用来获取子组件中的 dom 元素</li>
		 <li>3、ref 转发就是转发父组件中的 ref 对象到子组件里，用来获取子组件中的 dom 元素</li>
		 </ul>
		  <li>5、切记一个原则：如果在自定义组件上使用 ref 属性，那么该子组件必须是由 forwardRef 生成的，否则报错</li>
		 <ul>
			 高阶组件里的转发：
		 <li>6、 谨记一条原则：除了 class 组件上，如果要传递 ref,需要使用自定义属性将 ref 通过 props 传递进去</li>
		 <li>7、除了 class 特别之外，其他的自定义组件上使用 ref 的话，那么该组件必须使用 forwardRef 创建的，forwardRef 就是用来接收传递进来的 ref 对象的 </li>
		 </ul>
	 </ul>
</ul>
)
const text2 = (
	<ul style={{ paddingLeft: 24 }}>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 一、jsx 语法是什么 
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>一种语法糖，js+xml 的混写 </li>
		
	</ul>
	 <p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 二、在 jsx 语法中 html 的 class 和 for 属性需要怎么写？为什么需要转化写法？
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>className    htmlFor    dangerouslysetlnnerHTML    因为jsx语法在浏览器上支持</li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 三、 类数组怎么转化成数组 
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>Array.from()
[].slice(2).call(arguments)</li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 四、在 jsx 中 style 需要怎么写 
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>对象    第一层是js语法  第二层是对象</li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 五、jsx 语法中事件命名有什么特点
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>驼峰命名  on 后面的开头字母必须是大写的，x必须是驼峰命名法</li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 六、jsx 语法中可以允许多个根元素么？如果不可以，需要怎么处理  
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>不允许；<></>  </li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 七、判断数据类型有几种方式？有什么优缺点？
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>Object.prototype.toString.call</li>
		 <li>instanceof</li>
		 <li>typeof</li>
		 <li>constructor</li>
		 <ul>
			 不同类型的优缺点
			 <li>1、typeof                                优点： 使用简单     
         缺点：只能检测出基本类型（出null）</li>
		 <li>2、 instanceof  
   优点：能检测出引用类型     
   缺点：不能检测出基本类型，且不能跨iframe </li>
		 <li>3、constructor  
   优点：基本能检测所有的类型（除了null和undefined）
    缺点：constructor易被修改，也不能跨iframe</li>
		 <li>4、Object.prototype.toString.call
   优点：检测出所有的类型
   缺点：IE6下，undefined和null均为Object</li>
		 </ul>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 八、在 react 中这样一个标签真正表示的是什么？对象还是 html
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li>1、标签？如果是对象，请写出是如何转化成对象</li>
		 <li>2、对象    reactcreateElement</li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 九、在 dom 元素创建文本节点用的是什么方法
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li> document.createTextNode</li>
	</ul>
	<p></p>
	<p style={{fontSize:'18px',fontWeight:"bold"}}>
		 十、 jsx 语法中 html 和 js 的写法区别是什么
	</p>
	<ul style={{fontSize:'17px'}}>
		 <li> 表示html标签 {} 表示js语法</li>
	</ul> 

	</ul>
)

export default class shuReact extends Component {
	render() {
		return (
			<div style={{width:'1000px',margin:'auto'}}>
				<div style={{width:"160px",height:'40px',margin:'auto',fontSize:'22px' ,fontWeight:"bold",textAlign:"center"}}>React知识库</div>
				<p style={{width:'250px',height:'40px',margin:'20px auto',fontSize:'18px' }}>欢迎来到React笔记大全👏......</p>
			<Collapse bordered={false} defaultActiveKey={['1']}>
				    
    				<Panel style={{fontSize:'20px'}} header="React基础知识" key="1">
      						{text}
    				</Panel>
    				<Panel style={{fontSize:'20px'}} header="React练习题"  key="2">
      						{text2}
   				 	</Panel>
  			</Collapse>
			</div>
		)
	}
}
