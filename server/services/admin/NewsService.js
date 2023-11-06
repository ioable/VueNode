const NewsModel = require('../../models/NewsModel')



const NewsService = {
    add: async ({ title, content, category, isPublish, cover, editTime }) => {
        //进行数据库的增删操作
        return NewsModel.create({ title, content, category, isPublish, cover, editTime })
    },
    getList: async ({ _id }) => {
        return _id ? NewsModel.find({ _id }) : NewsModel.find({})
    },
    publish: async ({ _id, isPublish, editTime }) => {
        return NewsModel.updateOne({ _id }, { isPublish, editTime })
    },
    delList: async ({ _id }) => {
        return NewsModel.deleteOne({ _id })
    },
    updateList: async ({ _id, title, content, category, isPublish, cover, editTime }) => {
        if (cover) {// 判断是否存在头像数据
            // 连通数据库进行数据更新
            return NewsModel.updateOne({
                _id
            }, {
                title, content, category, isPublish, cover, editTime
            })
        } else {
            return NewsModel.updateOne({
                _id
            }, {
                title, content, category, isPublish, editTime
            })
        }
    }
}

module.exports = NewsService