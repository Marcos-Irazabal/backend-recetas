const { Router } = require('express');
const {check} = require("express-validator")
const {isEmailUsed} = require("../middlewares/validator-helper.db")
const {validateField} = require("../middlewares/field-validator.js")
const { login,usuariosPost} = require("../controllers/auth-controller.js")

const router = Router();


router.post('/login',[
    check("email","email no valido").isEmail(),
    check("email","email es obligatorio").not().isEmpty(),

    check("password","password debe ser mayor a 6 caracteres").isLength({min:6}),
    validateField],
login );


router.post('/register',[
    check("email","email no valido").isEmail(),
    check("email").custom(isEmailUsed),
    check("email","email es obligatorio").not().isEmpty(),

    check("password","password debe ser mayor a 6 caracteres").isLength({min:6}),

    validateField
    ]
    , usuariosPost );

module.exports = router;