const mongoose=require('mongoose')

const empSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    designation:String,
    gender:String,
    course:String,
    img:String
})

const Emplooye =mongoose.model("emp",empSchema)
module.exports=Emplooye