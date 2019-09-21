const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    title: {
        type: String,
        required: [true,'Title field id required']
    },
    price: {
        type: Number,
        required: [true,'Price field id required']
    },
    desc: {
        type: String,
        required: [true,'Desc field id required']
    },
    img: {
        type: String,
        required: [true,'Img field id required']
    },
    changedPriceOfProduct : {
        type: String,
        required: [true,'changedPriceOfProduct field id required']
    }
})
module.exports = mongoose.model('Product', Product);