var express = require('express');
const ProductController = require('../../controllers/admin/ProductController');
var ProductRouter = express.Router();
//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/productuploads/' })// 数据纯在服务器,地址存在数据库


/* GET home page. */
ProductRouter.post("/adminApi/product/add",upload.single('file'),ProductController.add)//添加产品
ProductRouter.get("/adminApi/product/list",ProductController.getList)//获取产品列表
ProductRouter.delete("/adminApi/product/list/:id",ProductController.delList)//获取产品列表
ProductRouter.post("/adminApi/product/list",upload.single('file'),ProductController.updateList)//更新产品
ProductRouter.get("/adminApi/product/list/:id",ProductController.getList)//根据id显示产品详情)


module.exports = ProductRouter;