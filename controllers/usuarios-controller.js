const { response, request } = require('express');
const User = require("../models/user.model.js")
const generateJWT  = require("../helpers/jwt-generator.js")
const bcrypt = require("bcryptjs") ;

const usuariosPost = async(req, res = response) => {
    //llega email ,password 
    const {email,password} = req.body;
    const user=new User({email,password});

    salt=bcrypt.genSaltSync();
    user.password=bcrypt.hashSync(password,salt)

    user.save();


    res.json({
        email:email,
        localId:user.localId,
        idToken:user.idToken,
        expiresIn: user.expiresIn
    });
}




const usuariosGet =async (req = request, res = response) => {
    const {limit = 5, from =0}=req.query; //parametros del URL
    const queryTotal = {state:true}

    const response = await Promise.all([
        //promesa 1
        User.find(queryTotal)
            .skip(Number(from))
            .limit(Number(limit)) ,
        //promesa 2
        User.countDocuments(queryTotal)
    ])

    //desestructuro para q no me quede la respuesta como un arreglo
    let [total,users]=response

    res.json({
        total,
        users
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
}