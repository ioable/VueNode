var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();
//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })// 数据纯在服务器,地址存在数据库


/* GET home page. */
UserRouter.post("/adminApi/user/login",UserController.login)//登录接口
UserRouter.post("/adminApi/user/upload",upload.single('file'),UserController.upload)// 更新个人信息接口
UserRouter.post("/adminApi/user/add",upload.single('file'),UserController.add)// 添加用户信息接口
UserRouter.get("/adminApi/user/list",UserController.getList)// 用户信息列表接口
UserRouter.get("/adminApi/user/list/:id",UserController.getList)
UserRouter.delete("/adminApi/user/list/:id",UserController.delList)// 删除用户信息接口
UserRouter.put("/adminApi/user/list/:id",UserController.putList)//编辑用户信息



module.exports = UserRouter;
