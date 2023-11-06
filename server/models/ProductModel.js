// 产品表
const mongoose  = require("mongoose")
const Schema = mongoose.Schema

const ProductType = {
    title: String,
    introduction: String,
    detail: String,
    cover: String,
    editTime:Date,
    // file: null
}
// 创建数据库模型
const ProductModel = mongoose.model("product",new Schema(ProductType))

module.exports = ProductModel