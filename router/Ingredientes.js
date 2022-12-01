const { Router } = require('express');
const { ingredientsGet} = require("../controllers/ingredients-controller.js")
const validateToken = require("../middlewares/jwt-validator");

const router = Router();


router.get('/',validateToken, ingredientsGet );

module.exports = router;