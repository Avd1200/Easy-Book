const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true,
    },

    author:{
        type:String,
        required: true,
    },

    title:{
      type: String,
      required: true,
    },

    image:{
        type: String,
        required: true
    },
    available:{
        type: Boolean
    },
},
{
    timestamps:true,
}
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;