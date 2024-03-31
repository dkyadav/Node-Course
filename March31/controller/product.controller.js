import mongoose from 'mongoose'
import { Product } from '../models/prodct.model.js';

export const addProduct = async(req,res) =>{
    console.log(req.body);

    const p = new Product(req.body);

    const returnfromdb = await p.save();

    
    res.send(returnfromdb);
}


export const getProduct = async(req,res) =>{
    const all_products = await mongoose.model('products').find();

    
    res.send(all_products);
}
