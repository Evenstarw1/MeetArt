const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Item = require('../models/Item');
const uploadCloud = require('../configs/cloudinary.js');

router.get('/', (req, res, next) => {
    return Item.find({username: req.user.username})
    .then(data => {/* console.log(data); */
    return res.status(200).json(data)})
    .catch(err => next(err));
})

router.get('/:id', (req, res, next) => {
    return Item.findById(req.params.id)
    .then(data => {/* console.log(data); */
    return res.status(200).json(data)})
    .catch(err => next(err));
})

//CREATE NEW ITEM
router.post('/', uploadCloud.single('item'), (req, res, next) => {
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