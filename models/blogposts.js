const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogpostSchema = new Schema({
    _id: {
        type: String
    },
    Title:{
        type: String
    },
    content: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    _v: {
        type: String
    },
    id: { 
        type: String
    }
})



module.exports = mongoose.model('Blogpost', blogpostSchema);