const {check} = require("express-validator")
const { Router } = require('express');
const {isEmailUsed} = require("../middlewares/validator-helper.db")
const {validateField} = require("../middlewares/field-validator.js");

const { usuariosPost } = require('../controllers/usuarios-controller');


const router = Router();

//check es un middleware, los cuales van entre la ruta y el controlador en un arreglo si son muchos
//luego en el controlador correspondiente checkeamos la respuesta de este middleware

// llega email , password , returnSecureToken:true}
router.post('/',[
    check("email","email no valido").isEmail(),
    check("email").custom(isEmailUsed),
    check("email","email es obligatorio").not().isEmpty(),

    check("password","password debe ser mayor a 6 caracteres").isLength({min:6}),

    validateField
    ]
    , usuariosPost );

module.exports= router;