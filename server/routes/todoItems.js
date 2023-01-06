const router = require('express').Router();

//importing the model
const todoItemsModel = require('../models/todoItems');

//making a router to add the data
router.post('/api/item', async (req, res)=>{
    try {
        const newItem = new todoItemsModel({
            item: req.body.item, completed: req.body.completed
        })
        //save this data to the database
        const saveItem = await newItem.save()
        res.status(200).json('Item Added Successfully');
    } catch (err) {
        res.json(err);
    }
})

//creating new route to get data from database
router.get('/api/items', async (req, res)=>{
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err);
    }
})

//creating new route to update items
router.put('/api/item/:id', async (req, res)=>{
    try {
        //find item by id and update it
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body, $set: req.body})
    } catch (err) {
        res.json(err);
    }
})


//exporting
module.exports = router;