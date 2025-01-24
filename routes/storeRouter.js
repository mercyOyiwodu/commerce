const { createUser, getAll, getOne, updateStore, deleteStore } = require('../controller/storeController');

const express=require('express');
const router=express.Router();
router.post('/user', createUser)
router.get('/user', getAll)
router.get('/user/:id',getOne)
router.patch('/user/:id',updateStore)
router.delete('/user/:id',deleteStore)


module.exports=router