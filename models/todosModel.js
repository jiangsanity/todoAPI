const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "No Subject",
    },
    body: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    doByDate: {
        type: Date,
        required: true,
    },
    completeDate: {
        type: Date,
        required: false,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    }
})

module.exports = mongoose.model('Todo', todoSchema);