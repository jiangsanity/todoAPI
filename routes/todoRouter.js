const express = require('express');
const router = express.Router();
const Todo = require('../models/todosModel');

// get todo
router.get('/', async (req, res) => {
    try {
        res.send('Hi there');
    } catch (error) {
        res.status(500).json({ message:error.message });        
    }
})

module.exports = router;