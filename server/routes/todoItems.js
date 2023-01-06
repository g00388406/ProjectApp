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


//exporting
module.exports = router;