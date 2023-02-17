const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Not Correct"],
        minlength: [3,"Need more than 3 characters"]
    },
    price: {
        type: Number,
        required: [true,"Not Correct"],
        min: [1,"Needs to be bigger than 1 dollar"],
        max: [100,"You cannot sell anything that high"]
    },
    description: {
        type: String,
        required: [true,"Not Correct"],
        minlength: [10,"Need more than 10 characters"]

    },
    //this is the created at and updated at
        created: Date,
        updatedAt: Date,
    },{timestamps:true})
const Product = mongoose.model('Product', productSchema);//rename
module.exports = Product;