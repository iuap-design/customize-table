# Table UI 设计器

---

## 1. 介绍
Table UI 设计器，可定制化组合功能特性，还可作为 Table 组件的测试工程。


## 2. 启动

> 建议使用项目自带依赖`ucf-scripts`工具使用，使用全局会有安装权限问题


1. 通过`npm scripts`启动

```bash

# 开发启动
$ npm start

# 开发构建
$ npm run build
```
内置配置脚本启动
```js
  "scripts": {
    "start": "ucf-scripts start",
    "build": "ucf-scripts build"
  },
  "devDependencies": {
    "ucf-scripts": "^1.0.2"
  }
```
![image](http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/uba/gui/img/ucf-cli-start.gif)

![image](http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/uba/gui/img/ucf-cli-build.gif)

2. 通过全局命令启动

切换到项目根目录后执行开发调试、上线构建：
```bash
# 全局安装工具
$ npm install ucf-scripts -g

# 开发启动
$ ucf-scripts start

# 开发构建
$ ucf-scripts build
```

![image](http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/uba/gui/img/ucf-scripts-install.gif)

![image](http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/uba/gui/img/ucf-scripts-start.gif)

![image](http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/uba/gui/img/ucf-scripts-build.gif)

## 3. 访问

访问路径：

```bash
http://127.0.0.1:3000/createTable
```
