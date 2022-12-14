const {Schema,model} =require("mongoose");

const recipeSchema=Schema({
    nombre:{
        type:String
    },
    foto_url:{
        type:String
    },
    descripcion:{
        type:String
    },
    ingredientes:{
        type:[{
            cantidad:Number,
            nombre:String
        }],
        default:[""],
    }
})
    
    // userSchema.methods.toJSON=function(){
    //     /*con la linea de abajo le saco los datos que no quiero que se vean al momento de devolver el usuario generado
    //     en postman , en este caso le saco la version (__v), la contraseña y el _id*/
    //     const {__v,password,_id,...aux}= this.toObject()
    //     aux.uid=_id;
    //     return aux;
    // }
    
module.exports= model("Recipe",recipeSchema)