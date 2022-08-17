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

    res.json({
        
    });
});

module.exports = router;