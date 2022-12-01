const { Router } = require('express');
const { orderPut,orderGet } = require("../controllers/orders-controller.js")
const validateToken = require("../middlewares/jwt-validator");
//const {validateField} = require("../middlewares/field-validator.js");

const router = Router();


router.put('/',validateToken, orderPut );

router.get('/',validateToken, orderGet );

module.exports = router;