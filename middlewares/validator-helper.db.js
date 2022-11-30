// const { Category } = require("../models/index.js")
// const { collection } = require("../models/role.model.js")
// const Role = require("../models/role.model.js")
const User = require("../models/user.model.js")

// const isRoleValid =async(role ="" )=>{
//     const existsRole = await Role.findOne({role})
//     if (!existsRole){
//         throw new Error("el rol "+role+" no esta definido en ld BD")
//     }
// }

const isEmailUsed=async(email)=>{
    const existingEmail=await User.findOne({email})
    if (existingEmail){
        throw new Error("el correo "+email+" ya esta en uso")
    }

}

const existsUserById=async(id)=>{
    const existingUser=await User.findById(id)
    if (!existingUser){
        throw new Error("el id "+id+" no existe")
    }

}

// const existsCategoryById=async(id)=>{
//     const existingCategory=await Category.findById(id)
//     if (!existingCategory){
//         throw new Error("el id "+id+" de la categoria no existe")
//     }

// }

const permitedCollection=(collection="",colections=[])=>{
    const b =colections.includes(collection)
    if(!b){
        throw new Error("coleccion no permitida")
    }
    return true

}

module.exports={
    // isRoleValid,
    isEmailUsed,
    existsUserById,
    // existsCategoryById,
    permitedCollection
}