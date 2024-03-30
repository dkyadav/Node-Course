import mongoose from 'mongoose';

const schema = mongoose.Schema;

const productSchema = new schema({
    title: String,
    desc:{type:String},
    quantity:{type: Number},
    date:{type: Date, deafult:Date.now},
})

export const Product = mongoose.model('products', productSchema);


