const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/AuthTable")
.then((res)=>{
    console.log("Database connected...")
})
.catch((err)=>{
    console.log(err)
})

module.exports=mongoose