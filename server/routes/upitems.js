const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Item = require('../models/Item');
const uploadCloud = require('../configs/cloudinary.js');

//CREATE NEW ITEM
router.post('/new', uploadCloud.single('item'), (req, res, next) => {
    console.log("New item");
    
    let { title, description, category } = req.body;
    let image = req.file.secure_url
    console.log(image);
    
     new Item({
        username: req.user.username,
        title,
        description,
        category,
        image
    }).save()
        .then((response) => {
            console.log("llegiosdosodgos");
            User.findByIdAndUpdate(req.user._id, { $push: { items: response._id } })
            .then((user) => { res.json(user) })
        }).catch(e => next(e))
})

module.exports = router;