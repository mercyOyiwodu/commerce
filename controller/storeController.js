const stores = require("../models/stores");
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (req, res) => {
    try {
        const data = {
            id: uuidv4(),
            storeName: req.body.storeName,
            location: req.body.location,
            email: req.body.email
        }
        const createUserInfo = await stores.create(data);
        
        res.status(201).json({ message: "New store created successfully", data: createUserInfo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.getAll = async (req, res) => {
    try {
        const createUserInfo = await stores.findAll();
        res.status(201).json({ message: "all the students below", data: createUserInfo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.getOne = async (req, res) => {
    try {
        const store = await stores.findByPk(req.params.id);
        if (!store) {
            return res.status(400).json({ message: 'store not found' });
        }
        const createUserInfo = await stores.findByPk(req.params.id);
        res.status(201).json({ message: " students with the below id", data: createUserInfo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

exports.updateStore = async (req, res) => {
    try {
        const store = await stores.findByPk(req.params.id);
        if (!store) {
            return res.status(404).json({ message: 'store not found' });
        }
        const newInfo = await stores.update({
            storeName: req.body.storeName,
            location: req.body.location
        }, { where: { id: req.params.id } });
        res.status(200).json({ message: "store updated successfully", data: newInfo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.deleteStore = async (req, res) => {
    try {
        const store = await stores.findByPk(req.params.id);
        if (!store) {
            return res.status(400).json({ message: 'store not found' });
        }
        await stores.destroy({ where: { id: store.id } });
        res.status(200).json("store deleted successfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
