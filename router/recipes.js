const { Router } = require('express');
const { recipesGet,recipesPut } = require("../controllers/recipes-controller.js")
const validateToken = require("../middlewares/jwt-validator");
const {validateField} = require("../middlewares/field-validator.js");

const router = Router();

router.get('/',[validateToken,validateField], recipesGet );

router.put('/', recipesPut );

module.exports = router;