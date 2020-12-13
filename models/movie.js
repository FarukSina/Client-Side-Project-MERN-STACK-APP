/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    MovieName:{
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Date,
        default: new Date(),
        required: true
    },
    genre: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
        minlength: 10
    }
},{
    timestamps: true,
}
)

module.exports = mongoose.model("Movie", MovieSchema);