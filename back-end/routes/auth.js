var express = require('express');
var router = express.Router();
var { Joi, validate } = require('express-validation');
var md5 = require('md5');
const User = require('../models/user');

/**
 * API: /auth/login
 */
router.post("/login", validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}, {}, {}), async function (req, res, next) {
    const {
        email, 
        password
    } = req.body;

    if(email != "kingdev10260522@gmail.com"){
        return res
            .status(401)
            .json({message: "Email didn't registered."});
    }
    
    if(password != "kingking"){
        return res
            .status(401)
            .json({message: "Incorrect password."});
    }

    return res
        .status(200)
        .json(({message: "successful login"}));
});

/**
 * API: /auth/register
 * Type: POST
 */
router.post("/register", validate({
    body: Joi.object({
        firstName: Joi.string().min(3).max(255).required(),
        lastName: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{8,255}/).required()
    })
}, {}, {}), async function (req, res, next) {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
    
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = md5(password);
    
        await user.save();
    
        res.json({
            status: true,
            message: "Success"
        });
    }
    catch(e) {
        res.json({
            status: false,
            message: e
        });
    }
});
module.exports = router;