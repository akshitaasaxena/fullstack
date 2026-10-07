const express= require('express')

const mongoose=require('mongoose')
const cors=require('cors')
const bodyParder=require('body-parser')
const products = require('./data')

const app=express();
app.use(cors());
app.use(bodyParder.json())

app.get('/api/products',(req,res)=>{
    res.json(products);
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})