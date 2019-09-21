const express = require('express');
const router = express.Router();
const Product = require("../models/product")

router.get("/products", function (req, res, next) {
    Product.find({}).then(function(products) {
        res.send(products);
    })
})

router.post("/products", function (req, res, next) {
    Product.create(req.body).then(function (product) {
        res.send(product);
    }).catch(next);
})
router.put("/products/:id", function (req, res, next) {
    Product.findByIdAndUpdate({ _id: req.params.id},req.body).then(function () {
        Product.findOne({ _id: req.params.id }).then(function (product) {
            res.send(product);
        })
    })
})

router.delete("/products/:id", function (req, res, next) {
    Product.findByIdAndRemove({ _id: req.params.id }, req.body).then(function (product) {
        res.send(product);
    })
})

module.exports = router;