# 白山前端培训

##  项目脚手架 SL

### 安装

```js
npm install sl-core -g
```

### 项目初始化

业务工程请选择 iGroot Project

```
mkdir project 
cd project
sl init
```

### 项目dev
```
sl dev
```

### 项目构建

```
sl build
```



### 项目结构介绍

```json
├── api  api请求方法目录
│   └── list.js
├── components  基础组件目录
│   ├── BasicLayout
│   │   ├── BasicLayout.jsx
│   │   ├── Logo.jsx
│   │   ├── Notice.jsx
│   │   ├── SiderMenu.jsx
│   │   ├── index.jsx
│   │   └── index.scss
│   ├── HocEditModal
│   │   ├── index.jsx
│   │   └── readme.md
│   ├── HocTablePage
│   │   ├── index.jsx
│   │   └── readme.md
│   ├── PageHeader
│   │   ├── PageHeader.jsx
│   │   ├── index.jsx
│   │   └── index.scss
│   └── TablePage
│       ├── TablePage.jsx
│       └── index.jsx
├── config  项目配置文件目录
│   ├── constant.js
│   ├── dict.js
│   ├── domain.js
│   ├── layout.js
│   ├── logo.js
│   ├── menu.js
│   └── version.js
├── pages 项目目录
│   └── index 默认项目目录
│       ├── App.jsx 顶层组件
│       ├── Home home页面
│       │   ├── Home.jsx
│       │   └── index.jsx
│       ├── List  list页面
│       │   └── List.jsx
│       ├── NotFound
│       │   ├── NotFound.jsx
│       │   └── index.jsx
│       ├── TablePage
│       │   ├── List
│       │   │   ├── EditModal.jsx
│       │   │   └── index.jsx
│       │   ├── Search.jsx
│       │   ├── TablePage.jsx
│       │   └── index.jsx
│       ├── VersionDetail
│       │   ├── VersionDetail.jsx
│       │   ├── index.jsx
│       │   └── index.scss
│       ├── demos
│       │   ├── demo1.jsx
│       │   └── index.jsx
│       ├── index.html
│       ├── index.jsx 入口文件
│       ├── index.scss
│       └── routerConfig.js  路由配置文件
├── static
│   └── favicon.ico
└── util 公共方法目录
    ├── base.js
    └── function.js
```



### 参考链接 



##数据驱动页面

1. 页面展示由数据决定
2. 组件本身的状态数据 state
3. 父组件传递给子组件的状态数据 props
4. 常量数据声明在组件外部
5. 状态数据扁平化



#### 参考链接

https://react.docschina.org/

## jsx语法

1. 原生html标签小写
2. 组件大写开头
3. 使用箭头函数
4. jsx语法里面的js
   1. 三元运算符
   2. 函数

#### 参考链接

https://react.docschina.org/

## react生命周期

示意图

![WechatIMG151](/Users/caijunxiong/lab/react-study/web/docs/WechatIMG151.png)
1. 数据请求在 componentDidMount

#### 参考链接

https://react.docschina.org/

## 前端模块声明与导出

1. export  {xxx}  对应 import {xxx}  form "xxx"
2. export deafault xxx 对应 import "xxx" form "xxx"

## 数据请求

1. 数据请求方法独立封装文件
2. 在 componentDidMount 进行数据请求
3. 请求到的数据经过处理后调用setState，触发页面render

## 数组几种常用函数



1. forEach
2. 设置默认值
3. 数组渲染必须设置key值
4. map
5. 判断是否为数组



## 组件化

1. render尽量简洁清晰
2. 提取公共部分作为组件
3. 设计props接口



## 表单使用

1. 受控组件包装
2. 设置初始值
3. 获取表单值



##  常用组件



组件官网 <http://igroot.i.qingcdn.com:8001/index-cn>

基础组件 <http://igroot.i.qingcdn.com:8001/docs/react/introduce-cn>

业务组件 <http://igroot.i.qingcdn.com:8001/docs/business/introduce-cn>



## 杂项

1. 后端域名配置
2. 字符串拼接