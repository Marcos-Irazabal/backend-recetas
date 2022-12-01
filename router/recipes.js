const { Router } = require('express');
const { recipesGet,recipesPut } = require("../controllers/recipes-controller.js")
const validateToken = require("../middlewares/jwt-validator");


const router = Router();

router.get('/',validateToken, recipesGet );

router.put('/', recipesPut );

module.exports = router;