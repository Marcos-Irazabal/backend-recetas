const { response, request } = require('express');
const  Recipe  = require("../models/recipes.model")


const recipesGet = async(req, res = response) => {

    const recetas = await Recipe.find();
    let arrayResponse=[]
    for( i=0;i<recetas.length;i++){
        arrayResponse.push(recetas[i])
    }
    res.send(arrayResponse)


}

const recipesPut = async(req, res = response) => {
    const {nombre ,foto_url ,descripcion,ingredientes} =req.body
    const receta = new Recipe({nombre,foto_url,descripcion,ingredientes})
    console.log(receta)
    receta.save()
    res.json({
        msg:"Receta creada",
        receta
    })

}



module.exports={ recipesPut , recipesGet}