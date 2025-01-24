
const { createProducts ,getAll, updateOne, deleteOne,getOne} = require('../controller/productController')
const express= require('express')
const router=express.Router()

router.post('/products',createProducts)
router.get('/products',getAll)
router.get('/products/:id',getOne)
router.patch('/products/:id',updateOne)
router.delete('/products/:id',deleteOne)