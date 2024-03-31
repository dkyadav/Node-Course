import express from 'express';
import { addProduct, getProduct } from '../controller/product.controller.js';

const productRouter = express.Router();

productRouter.get("/product", (req, res) => {
	res.send({ message: "ok product", status: 200 });
});

productRouter.post("/addProduct", addProduct)

productRouter.get("/getProducts", getProduct)



export default productRouter;