# vuepress 博客管理前端

## 介绍

### 背景

由于自己使用 vuepress 搭建了一个博客，并且使用了自己的服务器部署，管理博客挺不方便的，然后就写了个简陋的管理后台，目前功能还是比较粗糙的，等找完实习再考虑完善吧！

### 功能

- [x] 登录
- [x] 新增文章
- [x] 修改文章
- [x] 查看文章

### 待完成

- [] 评论管理
- [] 安全问题

## 界面

### 登录

![image](./shot/login.png)

### 首页

![image](./shot/dashboard.png)

### markdown 编辑器

![image](./shot/markdown.png)

## 使用

### 拉取代码

```bash
git clone https://github.com/vkm0303/vuepress-admin-frontend.git
```

### 安装依赖

```bash
npm i
```

### 配置

前端需要配置的东西不多，主要改一下 api 的地址

后台仓库：[vuepress-admin-backend](https://github.com/vkm0303/vuepress-admin-backend.git)

```javascript
//src/utils/request.js
const service = axios.create({
  baseURL: "http://localhost:3100/api", //api的基础路径
  timeout: 5000,
});
```

### 运行

```bash
npm run serve
```

### 打包

```bash
npm run build
```
