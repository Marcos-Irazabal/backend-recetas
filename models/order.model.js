const {Schema,model} =require("mongoose");

const orderSchema=Schema({
    usuario:{
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

        // type:Schema.Types.ObjectId,
        // ref:"User",
        // required:[true,"es obligatorio"]
    
module.exports= model("Order",orderSchema)