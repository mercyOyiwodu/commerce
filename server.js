const router=require('./routes/storeRouter')
const sequelize =require('./database/sequelize')
const express = require('express')

const port= 1717;

const app=express();
app.use(express.json());

app.use(router)

app.listen(port,()=>{
    console.log(`my server is up and running on port ${port}`);
})