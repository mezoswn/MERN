const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            3,
            "Name requires a minimum of 3 characters"
        ]
    }
}, { timestamps: true });

AuthorSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports.Author = mongoose.model('Author', AuthorSchema);
