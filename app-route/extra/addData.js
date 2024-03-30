import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

(async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.info("MongoDB has connected successfully.");
	} catch (error) {
		console.error("MongoDB connection error :", error);
	}
})();
// import("../models/product.schema_model.js");

import { Product } from "../models/product.model.js";


const add_item = 50;

for(let i=-0; i<add_item; i++){
    const newProduct = {
        title: `Product Title ${i}`,
        desc: `Product description for product number: ${i}`,
        quantity: i,
    }
	const result = await new Product(newProduct).save();
	console.log(result);

}
