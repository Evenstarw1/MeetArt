const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Item = require('../models/Item');
const uploadCloud = require('../configs/cloudinary.js');

//CREATE NEW ITEM
router.post('/api/item', uploadCloud.single('image'), (req, res, next) => {
    console.log("New item");
    
    let itemOwner = req.user._id
    let { title, description, category } = req.body;
    let image = req.file.secure_url

    return new Item({
        username: req.user.username,
        itemOwner,
        title,
        description,
        category,
        image
    }).save()
        .then((response) => {
            console.log(response);
            User.findByIdAndUpdate(req.user._id, { $push: { items: response._id } })
            .then((user) => { res.json(user) })
        }).catch(e => next(e))
})

module.exports = router;