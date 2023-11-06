const ProductModel = require('../../models/ProductModel')



const ProductService = {
    add: async ({ title, introduction, detail, cover,editTime }) => {
        //进行数据库的增删操作
        return ProductModel.create({ title, introduction, detail, cover,editTime })
    },
    getList: async ({ _id }) => {
        return _id ? ProductModel.find({ _id }) : ProductModel.find({})
    },
    delList: async ({ _id }) => {
        return ProductModel.deleteOne({ _id })
    },
    updateList: async ({ _id, title, introduction, detail, cover, editTime }) => {
        if (cover) {// 判断是否存在头像数据
            // 连通数据库进行数据更新
            return ProductModel.updateOne({
                _id
            }, {
                title, introduction, detail,cover, editTime
            })
        } else {
            return ProductModel.updateOne({
                _id
            }, {
                title, introduction, detail, editTime
            })
        }
    }
}

module.exports = ProductService