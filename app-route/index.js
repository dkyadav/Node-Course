import express from 'express';
//const express = require("express");

import dotenv from 'dotenv';
dotenv.config();
//require('dotenv').config();

import mainrouter from './routes/main.route.js';
import productroute from './routes/product.route.js'

import mongoose from 'mongoose'

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.info('MongoDB has connected successfully.');
    } catch (error) {
        console.error('MongoDB connection error :',error);
    }
})();

import("./models/product.model.js");
//import("./models/product.schema_model.js");


const app = express();
const server_port = process.env.SERVER_PORT || 5431;
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(202).send({data:'success'});
})

app.use(mainrouter);
app.use(productroute);

app.listen(server_port,()=>{
    console.log(`server running at ${server_port}`);
});