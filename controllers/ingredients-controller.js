const { response, request } = require('express');
const Ingredientes = require("../models/ingredient.model")

const ingredientsGet = async(req, res = response) => {
    const items = await Ingredientes.find();
    let arrayResponse=[]
    for( i=0;i<items.length;i++){
        arrayResponse.push(items[i]?.name)
    }
    res.status(200).json(arrayResponse)


}

module.exports={ ingredientsGet }