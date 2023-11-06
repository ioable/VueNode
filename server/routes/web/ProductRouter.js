var express = require('express');
const ProductController = require("../../controllers/web/ProductController")
var ProductRouter = express.Router();


ProductRouter.get("/webApi/product/list",ProductController.getList)//新闻列表
// ProductRouter.get("/webApi/news/list/:id",NewsController.getList)//预览新闻
// ProductRouter.get("/webApi/news/toplist",NewsController.getTopList)


module.exports = ProductRouter