const express = require('express')
require('./db/connect');
const cors= require('cors')
const Users=require('./db/Users')
const products=require('./db/product')
const app=express();

app.use(express.json())
app.use(cors())
app.post('/register',async (req,res)=>{
    let user= new Users(req.body);
    let result= await user.save();
    result=result.toObject();
    delete result.password
    res.send(result);
})
app.post('/login',async (req,res)=>{
    if(req.body.email && req.body.password){
        let data = await Users.findOne(req.body).select('-password')
        if(data){
            res.send(data)
        }else
        {
            res.send("Invalide Email And Password")
        }
    }else{
        res.send("Please Enter Both The value")
    }
})
app.post('/add',async (req,res)=>{
    const data= new products(req.body);
    const result =await data.save();
    res.send(result)
})
app.get('/',async (req,res)=>{
    const data= await products.find()
    // data = await data.json();
    res.send(data)
})
app.delete('/delete/:id',async (req,res)=>{
    const data = await products.deleteOne({_id:req.params.id});
    res.send(data)
})
app.get('/update/:id',async(req,res)=>{
    let data = await products.findOne({_id:req.params.id})
    res.send(data)
})
app.put('/update/:id',async(req,res)=>{
    let data = await products.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(data)
})
app.get('/search/:key',async (req,res)=>{
    let data = await products.find({
        "$or":[
            {name:{$regex:req.params.key}}
        ]
})
res.send(data)
})
app.listen(2020)