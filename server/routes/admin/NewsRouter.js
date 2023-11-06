var express = require('express');
const NewsController = require("../../controllers/admin/NewsController")
var NewsRouter = express.Router();


//中间件
const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })// 数据纯在服务器,地址存在数据库

//涉及文件上传，普通的post不行，需要加上multer中间件
NewsRouter.post("/adminApi/news/add",upload.single('file'),NewsController.add)
NewsRouter.get("/adminApi/news/list",NewsController.getList)//新闻列表
NewsRouter.post("/adminApi/news/list",upload.single('file'),NewsController.updateList)//编辑新闻
NewsRouter.get("/adminApi/news/list/:id",NewsController.getList)//预览新闻
NewsRouter.put("/adminApi/news/publish",NewsController.publish)
NewsRouter.delete("/adminApi/news/list/:id",NewsController.delList)



module.exports = NewsRouter