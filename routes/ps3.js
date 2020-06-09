const express = require('express');
const router = express.Router();

/* GET users listing. */
router.route('/')
    .get((req, res, next) => { //part b, simple GET
        res.render('ps3p2', {
            string: 'Hey all you cool cats and kittens',
        })
    })
    .post((req, res, next) => {
        let msg = req.body.message;
        let len = msg.length;
        res.render('ps3p3', {
            message: msg,
            length: len
        })
    });
module.exports = router;
