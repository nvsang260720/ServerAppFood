var regexp = require('regexp')
const Product = require('../../models/Product')

const postKey = async(req, res) => {
    const { key } = req.body
    
    if(key){
        const SearchProduct = await Product.find({ name: { $regex: key, $options: '$i' } })
        //const  SearchProduct =  await Product.find({ key})
        return res.json(SearchProduct)
    }else{
        return res.json({ message: 'server error' })
    }
    
    

}
module.exports = {
    postKey
}