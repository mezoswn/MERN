const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
            minlength: [3, 'title must be at least 5 characters long'],
        },
        price: {
            type: String,
            required: [true, 'title is required'],
        },
        description: {
            type: String,
            required: [true, 'title is required'],
        },
    },
    { timestamps: true },
)
module.exports.Product = mongoose.model('Product', ProductSchema)