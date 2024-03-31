import mongoose from 'mongoose';

export const Product = mongoose.model('products', new mongoose.Schema({
    name: String,
    desc: String,
    price: Number
}));