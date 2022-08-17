var express = require('express');
var router = express.Router();
var { Joi, validate } = require('express-validation')

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

module.exports = router;