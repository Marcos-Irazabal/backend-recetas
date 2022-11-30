const { response, request } = require('express');
const Order = require("../models/order.model")

const orderPut = async(req, res = response) => {
    const ultimo=req.body.length-1
    let result=[]
    for(var i in req.body){
        result.push([i, req.body [i]]);
    }
    // console.log("------------------")
    // console.log(result[ultimo])
    // console.log("------------------")
    // console.log(result[ultimo][1])

    const {usuario,ingredientes} =result[ultimo][1]
    const orden = new Order({usuario,ingredientes})
    console.log(orden)
    orden.save()
    res.json({
         msg:"orden creada",
        orden
    })


}

const orderGet = async(req, res = response) => {
    const ordenes = await Order.find();
    let arrayResponse=[]
    for( i=0;i<ordenes.length;i++){
        arrayResponse.push(ordenes[i])
    }
    res.send(arrayResponse)

}



module.exports={ orderPut , orderGet}