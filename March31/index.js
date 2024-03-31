import express from "express";
import indexRouter from "./routes/index.route.js";
import productRouter from "./routes/product.route.js";

import mongoose from 'mongoose'

const app = express();

(
    async () =>{
        try {
            await mongoose.connect('mongodb://localhost:27017/31march');
            console.log('mongo db connected successfully');
        } catch (error) {
            console.error(error);
        }
    }
)();

import("./models/prodct.model.js");

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.use(express.json());

app.use(indexRouter);
app.use(productRouter);

app.listen(3535, () => {
	console.log(`server running at 3535`);
});
