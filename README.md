## 三、路由的基本使用
## 四、路由组件与一般组件
1、写法不同
  一般组件：<Demo />
  路由组件：<Route path="/about" component={About} />
2、存放位置不同
  一般组件：components
  路由组件：pages
3、接收到的props不同：
  一般组件：写组件标签时传递了什么，就能收到什么
  路由组件：接收到三个固定的属性
          history:
            go:ƒ go() {}
            goBack:ƒ goBack() {}
            goForward:ƒ goForward() {}
            push:ƒ push() {}
            replace:ƒ replace() {}
          location:
            pathname:"/about"
            search:""
            state:undefined
          match:
            params:{}
            path:"/"
            url:"/"
## 五、NavLink与封装NavLink
  1、NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
  2、标签体内容时一个特殊的标签属性
  3、通过this.props.children可以获取标签体内容
## 六、Switch的使用
  1、通常情况下，path和component是一一对应的关系
  2、Switch可以提高路由匹配效率（单一匹配）
## 七、解决样式丢失问题
  <link rel="stylesheet" href="./css/bootstrap.css" />是相对路径，会随着path改变而不能获取bootstrap
  1、public/index.html 中引入样式时不写 ./ 写 / （常用）
  2、public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL% (常用)
  3、使用HashRouter;
  
## 八、路由的严格匹配与模糊匹配
  1、默认使用的事模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致
  2、开启严格撇皮：<Route exact={true}> path="/about" component={About} />
  3、严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
## 九、Redirect的使用
  1、一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
  2、具体编码：
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Redirect to="/about" />
      </Switch>
## 十、嵌套路由
  1、注册子路由时要写上父路由的path值
  2、路由的匹配是按照路由的顺序进行的
## 十一、向路由组件传递参数
  1、params参数
    路由链接（携带参数）：<Link to={`/home/message/detail/12/消息12`}>{msgObj.title}</Link>
    注册路由（声明接收）：<Route path='/home/message/detail/:id/:title' component={Detail} />
    接收参数：this.props.match.params
  2、search参数
    路由链接（携带参数）：<Link to={`/home/message/detail/?id=12&title=消息12`}>{msgObj.title}</Link>
    注册路由（声明接收）：<Route path='/home/message/detail/' component={Detail} />
    接收参数：this.props.location.search
    备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
  3、state参数
    路由链接（携带参数）：<Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
    注册路由（声明接收）：<Route path='/home/message/detail/' component={Detail} />
    接收参数：this.props.location.state
    备注：刷新也可以保留住参数
## 十二、编程式路由导航
  借助this.prop.history对象上的API对操作路由跳转、前进、后退
    -this.prop.history.push()
    -this.prop.history.replace()
    -this.prop.history.goBack()
    -this.prop.history.goForward()
    -this.prop.history.go()
## 十三、BrowserRouter和HashRouter的区别
  1、底层原理不一样
    BrowserRouter使用的事H5的history API，不兼容IE9及以下版本
    HashRouter使用的事URL的哈希值
  2、path表现形式不一样
    BrowserRouter的路径中美欧#，例如：localhost:3000/demo/test
    HashRouter的路径不含#例如：localhost://3000/#/demo/teat
  3、刷新后对路由state参数的影响
    （1）BrowserRouter没有任何影响，因为state保存在history那对象中
    （2）HashRouter刷新后会导致路由state参数的丢失！！！
  4、备注：HashRouter可以用于解决一些路径错误相关的问题






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
