var express = require('express');
const NewsController = require("../../controllers/web/NewsController")
var NewsRouter = express.Router();


NewsRouter.get("/webApi/news/list",NewsController.getList)//新闻列表
NewsRouter.get("/webApi/news/list/:id",NewsController.getList)//预览新闻
NewsRouter.get("/webApi/news/toplist",NewsController.getTopList)


module.exports = NewsRouter