import mongoose from 'mongoose';

export const Product = mongoose.model('products', new mongoose.Schema({
    title: String,
    desc:{type:String},
    quantity:{type: Number},
    date:{type: Date, deafult:Date.now},
}));

