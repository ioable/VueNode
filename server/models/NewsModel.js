// 新闻表
const mongoose  = require("mongoose")
const Schema = mongoose.Schema

const NewsType = {
    title: String,
    content: String,
    category: Number,//1最新动态 2典型案例  3通知公告
    cover: String,
    isPublish: Number,//0未发布 1发布
    editTime: Date,
}
// 创建数据库模型
const NewsModel = mongoose.model("news",new Schema(NewsType))

module.exports = NewsModel