//https://mongoosejs.com/docs/api/model.html

import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
//import { Product } from "../models/product.schema_model.js";

export const insertData = async (req, res) => {
	console.log(req.body);
	const productData = new Product(req.body);
	//console.log(productData);
	try {
		const prod_ret = await productData.save();
		res.send(prod_ret);
	} catch (e) {
		console.error(e);
		res.status(400).send(e.message);
	}
};

export const deleteData = async (req, res) => {
	const pid = req.body._id;
	console.log(pid);
	try {
		const prod_ret = await Product.deleteOne({ _id: pid });
		res.send(prod_ret);
	} catch (e) {
		console.error(e);
		res.status(400).send(e.message);
	}
};

export const updateData = async (req, res) => {
	const pid = req.body._id;
	console.log(pid);
	try {
		const prod_ret = await Product.updateOne(
			{ _id: pid },
			{
				title: req.body.title,
				desc: req.body.desc,
				quantity: req.body.quantity,
			}
		);
		res.send(prod_ret);
	} catch (e) {
		console.error(e);
		res.status(400).send(e.message);
	}
};

export const findById = async (req, res) => {
	const pid = req.params._id;
	console.log(pid);
	try {
		const prod_res = await mongoose.model("products").findOne({ _id: pid });

		res.send(prod_res);
	} catch (e) {
		console.error(e);
		res.status(400).send(e.message);
	}
};

export const findAll = async (req, res) => {
	const pid = req.params._id;
	console.log(pid);
	try {
		const prod_res = await mongoose
			.model("products")
			.find()
			.sort({ quantity: -1 });

		res.send(prod_res);
	} catch (e) {
		console.error(e);
		res.status(400).send(e.message);
	}
};

export const searchProds = async (req, res) => {
	try {
		const prod_res = await mongoose
			.model("products")
			.find({ title: { $regex: req.body.title } });
		res.send(prod_res);
	} catch (e) {
		console.error(e);
		res.status(400).send(e.message);
	}
};
