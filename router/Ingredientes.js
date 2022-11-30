const { Router } = require('express');
const { ingredientsGet} = require("../controllers/ingredients-controller.js")
const validateToken = require("../middlewares/jwt-validator");
const {validateField} = require("../middlewares/field-validator.js");

const router = Router();


router.get('/',[validateToken,validateField], ingredientsGet );

module.exports = router;