const { Router } = require('express');
const { orderPut,orderGet } = require("../controllers/orders-controller.js")
const validateToken = require("../middlewares/jwt-validator");
const {validateField} = require("../middlewares/field-validator.js");

const router = Router();


router.put('/',[validateToken,validateField], orderPut );

router.get('/',[validateToken,validateField], orderGet );

module.exports = router;