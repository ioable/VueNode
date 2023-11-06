
const ProductService = require("../../services/web/ProductService")


const ProductController = {
    getList: async (req, res) => {
        const result = await ProductService.getList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    // getTopList: async (req, res) => {//预览新闻
    //     const result = await ProductService.getTopList({ limit: req.query.limit })
    //     res.send({
    //         ActionType: "OK",
    //         data: result
    //     })
    // },

}

module.exports = ProductController