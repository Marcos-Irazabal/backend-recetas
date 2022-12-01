const { response, request, json } = require('express');
const User = require("../models/user.model.js")
const generateJWT  = require("../helpers/jwt-generator.js")
const bcrypt = require("bcryptjs") ;

const login = async(req, res = response) => {

    const {password,email} = req.body;
    const user = await User.findOne({email});

    //email valido
    if(!user){
        return res.status(400).json({
            msg:"email no valido"
        })
    }

    //usuario que no tenga marca de eliminado logico
    if(user.status===false){
        return res.status(400).json({
            msg:"usuario no valido"
        })
    }

    //contraseña valida
    if(! await bcrypt.compareSync(password,user.password)){
        return res.status(400).json({
            msg:"contraseña no valida"
        })
    }

    //genero JSON web token
    const token = await generateJWT(user.id)


    // tengo que devolver resData.email,resData.localId,resData.idToken,resData.expiresIn
    res.status(200).json({
        email:email,
        localId:user.localId,
        idToken:token,
        expiresIn: user.expiresIn
    });
}


const usuariosPost = async(req, res = response) => {
    //llega email ,password 
    const {email,password} = req.body;
    const user=new User({email,password});

    salt=bcrypt.genSaltSync();
    user.password=bcrypt.hashSync(password,salt)

    //genero JSON web token
    const token = await generateJWT(user.uid)

    user.save();


    res.status(200).json({
        email:email,
        localId:user.localId,
        idToken:token,
        expiresIn: user.expiresIn
    });
}

module.exports={ login,usuariosPost}