const mongoose=require('mongoose')

const adminSchema = new mongoose.Schema({
    username:String,
    password:String
})

const loginAdmin =mongoose.model("Admin",adminSchema)
module.exports=loginAdmin