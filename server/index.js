//mongodb+srv://Shree1324:<db_password>@cluster0.bccfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express =require('express')
const connectDB=require('./db.js')
const loginAdmin =require('./models/admin.js')
const Emplooye=require('./models/empdb.js')
const cors=require('cors')

const app=express();

connectDB();

app.use(cors());
app.get("/",async(req,res)=>{
    const admin =await loginAdmin.find()
    res.json(admin)
});
app.get("/employees",async(req,res)=>{
    const emp =await Emplooye.find()
    res.json(emp)
});

app.use(express.json())
app.listen(5000,()=>{
    console.log("app is running")
});