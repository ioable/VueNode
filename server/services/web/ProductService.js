const ProductModel = require('../../models/ProductModel')



const ProductService = {
    getList: async ({ _id }) => {
        return _id ? ProductModel.find({ _id}) : ProductModel.find().sort({editTime:-1})
    },
    // getTopList:async ({ limit }) => {
    //     return ProductModel.find({isPublish:1}).sort({editTime:-1}).limit(limit)
    // },
}

module.exports = ProductService