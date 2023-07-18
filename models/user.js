const mongoose = require("mongoose");

const UserSchema =   mongoose.Schema({
    
    name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps:true
})


const User = mongoose.model("User",UserSchema);

module.exports=User;