
# React开发环境搭建

1. 安装Node.js

ReactJS的官方网站为:https://reactjs.org

安装Node只需要进入Node网站，进行相应版本的下载，然后进行双击安装就可以了。

Node中文网址：http://nodejs.cn/

Node.js 安装好以后， 输入代码：
```
>node -v
v16.5.0
```

如果正确出现版本号，说明Node安装成功了。
```
>npm -v
7.20.0
```

如果正确出现版本号，说明npm也是没问题的，这时候Node.js安装就算完成了。

> React 几个库文件:
> react-development.js  -> React
> react-dom.development.js  -> ReactDOM
> babel.min.js

2. 脚手架的安装

Node安装好之后，就可以使用npm命令来安装脚手架工具了。打开终端，然后输入下面的命令就可以了。
```
npm install -g create-react-app
```

`create-react-app`是React官方出的脚手架工具，其实有很多第三方的脚手架工具，也有很多优秀的。

3. 创建第一个React项目

脚手架安装好以后，就可以创建项目了。创建一个ReactDemo文件夹，然后进入这个文件夹，创建新的React项目。
```
mkdir ReactDemo  //创建ReactDemo文件夹
cd ReactDemo
create-react-app demo01   //用脚手架创建React项目
cd demo01   //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
```
这些操作只需要再终端中输入就可以了。等到浏览器可以打开React网页，并正常显示图标后，说明我们的环境已经全部搭建完成了。

4. 安装React Developer tools 谷歌浏览器扩展

5. 安装AntDesign

Ant Design是一套面向企业级开发的UI框架，视觉和动效作的很好。阿里开源的一套UI框架，它不只支持React，还有ng和Vue的版本。
这里使用npm来进行安装，当然你有可以用yarn的方式进行安装.
```
npm install antd --save
```
yarn的安装方式是:
```
yarn add antd
```

6. 安装React Router

在终端中用npm直接安装React Router.
```
npm install --save react-router-dom
```

7. 安装Redux
```
npm install --save redux
```
8. 安装Redux dev 谷歌浏览器扩展

9. 安装axios
```
npm install axios --save
```

10. 安装 redux-thunk 中间件
```
npm install redux-thunk --save
```

11. Redux-saga中间件

redux-saga 是 redux 一个中间件，用于解决异步问题。

```
npm install redux-saga --save
```

12. react-redux
```
npm install react-redux --save 
```
 
