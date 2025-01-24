const router=require('./routes/storeRouter')
const sequelize =require('./database/sequelize')
const express = require('express')

const port= 1717;

const app=express();
app.use(express.json());
const server = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
 
    }
}

server();

app.use(router)

app.listen(port,()=>{
    console.log(`my server is up and running on port ${port}`);
})