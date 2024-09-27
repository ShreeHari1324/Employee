const mongoose = require('mongoose');
const connectDB =async ()=>{
    try{
        const conn =await mongoose.connect('mongodb+srv://Shree1324:Amitharani%403@cluster0.bccfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB connected :${conn.connection.host}`)
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}
module.exports =connectDB;