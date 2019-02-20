> 这是博客后台,采用node+express+mongodb

### 引入的依赖

-   `npm i config-lite connect-flash connect-mongo ejs express express-session marked moment mongolass objectid-to-timestamp sha1 winston express-winston --save`
- `npm i https://github.com:utatti/express-formidable.git --save # 从 GitHub 安装 express-formidable 最新版，v1.0.0 有 bug`
  1. `express`: web框架
  2. `express-session`: session 中间件
  3. `connect-mongo`: 将 session 存储于 mongodb，结合 express-session 使用
  4. `connect-flash`: 页面通知的中间件，基于 session 实现
  5. `express-formidable`: 接收表单及文件上传的中间件
  6. `config-lite`: 读取配置文件
  7. `marked`: markdown 解析
  8. `moment`: 时间格式化
  9. `mongolass`: mongodb 驱动
  10. `objectid-to-timestamp`: 根据 ObjectId 生成时间戳
  11. `md5`: md5 加密，用于密码加密
  12. `winston`: 日志
  13. `express-winston`: express 的 winston 日志中间件
  14. `nodemon`:自动重启服务
  15. `body-parser` 解析post请求参数

### 目录结构:

- routes: 存放路由文件
- models: 存放操作数据库文件
- package.json 存放文件依赖

### 数据库文档说明:

```javascript
// user表
// gender字段 :
// f 女
// m 男
// x 保密
```

